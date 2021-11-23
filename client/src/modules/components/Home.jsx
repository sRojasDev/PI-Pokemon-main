import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getPokemons, filterPokeByOrigin, OrderByName, OrderByForce, filterPokeByType } from '../../redux/actions';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Paginado from './Paginado';
import CardsPoke from './CardsPoke';
import RenderError from './renderError';
import "./home.css";



export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=>state.pokemons);
    const notFound=useSelector((state)=>state.error);
    // let arrPrimeros=allPokemons.slice(0,9);
    // let arrRestantes=allPokemons.slice(9); 
    
    const [currentPage, setCurrentPage]= useState(1);
    const [pokemonsPerPage, setPokemonsPerPage]= useState(12);
    const[order, setOrder]=useState("");
    const indexOfLast = currentPage * pokemonsPerPage; //  
    const indexOfFirst = indexOfLast - pokemonsPerPage;
    const currentPokemons= allPokemons && allPokemons.slice(indexOfFirst,indexOfLast);
    
    const variacion= (currentPage)=>{
        let cantidad=12;
        if (currentPage===1){
            cantidad=9;
        }
        setPokemonsPerPage(cantidad);
    }

    const paginado = (pageNumber)=> {
        setCurrentPage(pageNumber);
    }


    // useEffect(()=>{
    //     dispatch(getPokemons());
    //     console.log("se ejecutó el primer useEffect");
    // }, [])
    useEffect(()=>{
        variacion(currentPage);
        console.log("se ejecutó el segundo efect");
    } )

    

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemons());
        setCurrentPage(1);
        console.log("entró al handle");
    }
    function handleFilteredState(e){
        e.preventDefault();
        dispatch(filterPokeByType(e.target.value));
    }
    function handleFilteredOrigin(e){
        e.preventDefault();
        dispatch(filterPokeByOrigin(e.target.value));
    }
    function handleOrderAlf(e){
        e.preventDefault();
        dispatch(OrderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    }
    function handleOrderForce (e){
        e.preventDefault();
        dispatch(OrderByForce(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
        console.log(order);
    }
    if (notFound){ return(
        <div>
            <p>Home Pokemon</p>
            <button onClick={e=>{handleClick(e)}}>Todos</button>
            <div>
                <select name="origen" id="origen" onChange={e => handleFilteredOrigin(e)} >
                    <option value="All">Todos</option>
                    <option value="propio">Creados</option>
                    <option value="existente">Existentes</option>
                </select>
            </div>
            <div>
            <RenderError/>
            </div> 
        </div>
    ) }
        
    return (
        <div>
            <Link to='/crear'>Crear personaje</Link>
            <p>Home Pokemon</p>
            <button onClick={e=>{handleClick(e)}}>Todos</button>
            <div>
                <select name="origen" id="origen" onChange={e => handleFilteredOrigin(e)} >
                    <option value="All">Todos</option>
                    <option value="propio">Creados</option>
                    <option value="existente">Existentes</option>
                </select>
            </div>
            <div>
                <select name="tipos" id="tipos" onChange={e => handleFilteredState(e)}>
                    <option value="All">Todos los Tipos</option>
                    <option value="normal">🐾 Normal</option>
                    <option value="fighting">🥊 Pelea</option>
                    <option value="flying">🪁 Volador</option>
                    <option value="poison">☠️ Veneno</option>
                    <option value="ground">⛰️ Tierra</option>
                    <option value="rock">🗿 Roca</option>
                    <option value="bug">🐞 Insecto</option>
                    <option value="ghost">👻 Fantasma</option>
                    <option value="steel">🔩 Acero</option>
                    <option value="fire">🔥 Fuego</option>
                    <option value="water">💧 Agua</option>
                    <option value="grass">🍃 Hierba</option>
                    <option value="electric">⚡ Electrico</option>
                    <option value="psychic">👁️‍🗨️ Psíquico</option>
                    <option value="ice">❄️ Hielo</option>
                    <option value="dragon">🐉 Dragón</option>
                    <option value="dark">⚫ Oscuro</option>
                    <option value="fairy">✨ Hada</option>
                    <option value="unknown">❔ Desconocido</option>
                    <option value="shadow">🌘 Sombra</option>     
                </select>
                </div>
                <div>
                    <select name="Alfabetico" id="Alfabetico"  onChange={e=>handleOrderAlf(e)}>
                        <option value="asc"> Acendente a-Z </option>
                        <option value="des"> Decendente z-A </option>
                    </select>
                </div>
                <div>
                    <select name="OrdenFuerza" id="OrdenFuerza"  onChange={e=>handleOrderForce(e)}>
                        <option value="asc"> Acendente - Por fuerza </option>
                        <option value="des"> Decendente - Por fuerza </option>
                    </select>
                </div>
                <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={ allPokemons &&allPokemons.length} paginado={paginado}></Paginado>
                <SearchBar/>
                <div className="grid-fluid" >
                <CardsPoke currentP={currentPage} array={currentPokemons} />
                </div>

            </div>
        )
} 
