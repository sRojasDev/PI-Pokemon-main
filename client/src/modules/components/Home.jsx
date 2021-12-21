import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getPokemons, filterPokeByOrigin, OrderByName, OrderByForce, filterPokeByType, getTypes } from '../../redux/actions';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import Paginado from './Paginado';
import Logo from './Logo';
import CardsPoke from './CardsPoke';
import RenderError from './renderError';
import styled from 'styled-components';
import "./home.css";
import "./creaPoke.css";



export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=>state.pokemons);
    const notFound=useSelector((state)=>state.error);
    
    useEffect(()=>{
        dispatch(getTypes());
    }, [])
    
    const [currentPage, setCurrentPage]= useState(1);
    const [pokemonsPerPage, setPokemonsPerPage]= useState(12);
    const[order, setOrder]=useState("");
    const indexOfLast = currentPage * pokemonsPerPage; //  
    const indexOfFirst = indexOfLast - (pokemonsPerPage);
    let currentPokemons=[] 
    if (currentPage ===1){
        currentPokemons= allPokemons && allPokemons.slice((indexOfFirst),indexOfLast);
    } else{
        currentPokemons= allPokemons && allPokemons.slice((indexOfFirst-3),(indexOfLast-3));
    }
    
    
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


    useEffect(()=>{
        dispatch(getPokemons());
        console.log("se ejecutó el primer useEffect");
    }, [])
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
            <RenderError/>
            </div> 
        </div>
    ) }
    const CrearLink= styled.h3`
    text-decoration: none;
    max-width: 16em;
    margin: auto;
    &:hover{
        color: rgb(15, 95, 95);
    }
    `;


        
    return (
        <div> <Logo/>
            <p className="title"> <h1> Pokémon App </h1></p>
            
            <nav className="Nav">
            <CrearLink>   
            <Link to='/crear' className='blanco'>Crear personaje</Link>
            </CrearLink>
            <SearchBar/>
            </nav>
            <button onClick={e=>{handleClick(e)}} className="btnDiscret">Todos</button>
            <div>
                <select name="origen" id="origen" onChange={e => handleFilteredOrigin(e)} >
                    <option value="All">Todos</option>
                    <option value="propio">Creados</option>
                    <option value="existente">Existentes</option>
                </select>
            </div>
            <div>
                <select name="tipos" id="tipos" onChange={e => handleFilteredState(e)}>
                    <option value="All">Todos los tipos</option>
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
                    <option value="electric">⚡ Eléctrico</option>
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
                        <option value="asc"> Ascendente A-Z </option>
                        <option value="des"> Descendente Z-A </option>
                    </select>
                </div>
                <div>
                    <select name="OrdenFuerza" id="OrdenFuerza"  onChange={e=>handleOrderForce(e)}>
                        <option value="asc"> Ascendente - Por fuerza </option>
                        <option value="des"> Descendente - Por fuerza </option>
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
