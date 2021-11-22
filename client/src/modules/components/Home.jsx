import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPokeByStatus, getPokemons, filterPokeByOrigin, OrderByName } from '../../redux/actions';
//import Card from './Card/Card';
import { Link } from 'react-router-dom';
import Paginado from './Paginado';
import CardsPoke from './CardsPoke';



export default function Home() {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state)=>state.pokemons);
    const cantPropios = useSelector((state)=>state.pokemons);
    // let arrPrimeros=allPokemons.slice(0,9);
    // let arrRestantes=allPokemons.slice(9); 
    
    const [currentPage, setCurrentPage]= useState(1);
    const [pokemonsPerPage, setPokemonsPerPage]= useState(12);
    const[order, setOrder]=useState("");
    const indexOfLast = currentPage * pokemonsPerPage; //  
    const indexOfFirst = indexOfLast - pokemonsPerPage;
    const currentPokemons= allPokemons && allPokemons.slice(indexOfFirst,indexOfLast);

    const variacion= (currentPage)=>{
        let cantidad= 12;
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
        console.log("entró al handle");
    }
    function handleFilteredState(e){
        e.preventDefault();
        dispatch(filterPokeByStatus(e.target.value));
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
    
        
    return (
        <div>
            <Link to='/pokemons'>Crear personaje</Link>
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
                <Paginado pokemonsPerPage={pokemonsPerPage} allPokemons={ allPokemons &&allPokemons.length} paginado={paginado}></Paginado>
                <div>
                <CardsPoke currentP={currentPage} array={currentPokemons} />
                </div>
            </div>
        )
} 


    {/* {arrPrimeros?.map(pok => {
                        console.log(pok.id);
                        console.log(pok.hasOwnProperty('imagen'));
                        console.log(pok); 
                        return <Fragment key={pok.id}>
                                        <Link to={"pokemons/"+pok.id}>
                                        <Card nombre={pok.nombre} imagen={pok.imagen} tipos={pok.tipos} key={pok.id} propio={pok.hasOwnProperty('Tipos')} dbTipo={pok.Tipos} />
                                        </Link>
                                    </Fragment>
                        })
                    }     */}