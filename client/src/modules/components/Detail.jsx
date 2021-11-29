import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPokeById , getPokemons, searchOnMyState} from '../../redux/actions'
import RenderError from './renderError';
import { useParams } from 'react-router';
import "./creaPoke.css";
import { useLocation } from 'react-router';

export default function Detail(){

    const {id}= useParams();
    let locat= useLocation();
    
    console.log(locat);
    console.log(id);
    const dispatch= useDispatch();
    const pokemon = useSelector(state=>state.detail);
    const notFound= useSelector(state => state.error);
    useEffect(() => {
        console.log(id);
    },[pokemon])
    useEffect(() => {
        dispatch(getPokeById(id));
    },[dispatch])

    if(locat.search){
    const query = new URLSearchParams(locat.search);
    const propio= query.get("propio");
    console.log(propio); 

    searchOnMyState({
        key:"nombre",
        value:id,
    });
    
    
    // return(

    //     <div className="form" >
    //         <Link to={"/pokemons"} > <button>Volver</button></Link>
        
    //             <div>
    //                 <div>
    //                     <h2>{pokemon.nombre || ""}</h2>
    //                 </div>
    //                 <div>
    //                     <img src={pokemon.imagen } alt={pokemon.nombre|| ""} />
    //                 </div>
    //                 <div>          
    //                     <div>
    //                         ID: {pokemon.id}
    //                     </div>           
    //                     <div>
    //                         TIPO/s:{
    //                             pokemon.tipos
    //                         }
    //                     </div>
    //                     <div>
    //                         ESTADÍSTICAS:
    //                     </div>
    //                     <div>
    //                         <p>
    //                         vida: {pokemon.vida}
    //                         </p>
    //                         <p>
    //                         fuerza: {pokemon.fuerza}
    //                         </p>
    //                         <p>
    //                         defensa: {pokemon.defensa}                                
    //                         </p>
    //                         <p>
    //                         velocidad: {pokemon.velocidad}
    //                         </p>
    //                     </div>
    //                     <div>
    //                         <p>altura: {pokemon.altura}</p>
    //                         <p> peso: {pokemon.peso}</p>

    //                     </div>                    
    //                 </div>
    //             </div>
            
    //     </div>
    // )


    }
    
    // useEffect(() => {
    //     console.log(id);
    // },[pokemon])

    // useEffect(() => {
    //     dispatch(getPokeById(id));
    // },[dispatch,pokemon])



    
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

        <div className="form" >
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