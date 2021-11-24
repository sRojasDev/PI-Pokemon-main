import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPokeById , getPokemons} from '../../redux/actions'
import {useHistory} from "react-router";
import RenderError from './renderError';
import { useParams } from 'react-router';
export default function Detail(){

    const {id}= useParams();
    console.log(id);

    const history= useHistory();
    const dispatch= useDispatch();
    const pokemon = useSelector(state=>state.detail);
    const notFound= useSelector(state => state.error);

    useEffect(() => {
        dispatch(getPokeById(id));      
    },[dispatch])



    
    while (!pokemon){ return(
        <div>
            <p>Detalle Pokemon</p>
            <Link to={"/pokemons"} >
            <button >Todos</button>
            </Link>
            <div>
            <RenderError/>
            </div> 
        </div>
    ) }

    return (

        <div>
            <Link to={"/pokemons"} > <button>Volver</button></Link>
        
                <div>
                    <div>
                        <h2>{pokemon.nombre || ""}</h2>
                    </div>
                    <div>
                        <img src={pokemon.imagen } alt={pokemon.nombre|| ""} />
                    </div>
                    <div>          
                        <div>
                            ID: {pokemon.id}
                        </div>           
                        <div>
                            TIPO/s:{
                                pokemon.tipos
                            }
                        </div>
                        <div>
                            ESTADÍSTICAS:
                        </div>
                        <div>
                            <p>
                            vida: {pokemon.vida}
                            </p>
                            <p>
                            fuerza: {pokemon.fuerza}
                            </p>
                            <p>
                            defensa: {pokemon.defensa}                                
                            </p>
                            <p>
                            velocidad: {pokemon.velocidad}
                            </p>
                        </div>
                        <div>
                            <p>altura: {pokemon.altura}</p>
                            <p> peso: {pokemon.peso}</p>

                        </div>                    
                    </div>
                </div>
            
        </div>
    )
}