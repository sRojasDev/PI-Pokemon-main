import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPokeById } from '../../redux/actions'
import {useHistory} from "react-router";
import RenderError from './renderError';

export default function Detail(props){

    const history= useHistory();
    const dispatch= useDispatch();
    const pokemon = useSelector(state=>state.pokemons);
    const notFound= useSelector(state => state.error);
    useEffect(() => {
        dispatch(getPokeById(props.match.params.name));      
    },[dispatch,props.match.params.name])



    function handleClick() {
        history.push('/pokemons');
        //dispatch(getPokemons(""))
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

    return (

        <div>
            <Link to="/home">
                <button onClick={handleClick}>Volver</button>
            </Link>
        
                <div>
                    <div>
                        <h2>{pokemon.nombre}</h2>
                    </div>
                    <div>
                        <img src={pokemon.img} alt={pokemon.nombre} />
                    </div>
                    <div>          
                        <div>
                            ID: {pokemon.id_pokemon}
                        </div>           
                        <div>
                            TIPO/s:{
                                pokemon.tipos.map((e,i)=>{
                                return <p key={i}> {e}</p> 
                                })
                            }
                        </div>
                        <div>
                            ESTADÍSTICAS:
                        </div>
                        <div>
                            <p>
                            vida: {pokemon.habilidades.vida}
                            </p>
                            <p>
                            fuerza: {pokemon.habilidades.fuerza}
                            </p>
                            <p>
                            defensa: {pokemon.habilidades.defensa}                                
                            </p>
                            <p>
                            velocidad: {pokemon.habilidades.velocidad}
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