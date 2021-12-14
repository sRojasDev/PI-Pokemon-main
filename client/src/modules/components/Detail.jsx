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
    const detail = useSelector(state=>state.detail);
    const notFound= useSelector(state => state.error);
    useEffect(() => {
        console.log("pasó por el primer efect escucha detail" );
    },[detail])
    useEffect(() => {
        dispatch(getPokeById(id));
    },[dispatch])
    useEffect(() => {
        console.log("llegó al segundo efect")
    },[detail])

    if(locat.search){
    const query = new URLSearchParams(locat.search);
    const propio= query.get("propio");
    console.log(propio); 

    searchOnMyState({
        key:"nombre",
        value:id,
    });
    
    }
    
    // useEffect(() => {
    //     console.log(id);
    // },[pokemon])

    // useEffect(() => {
    //     dispatch(getPokeById(id));
    // },[dispatch,pokemon])



    
    while (!detail){ return(
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
                        <h2>{detail.nombre || detail[0].nombre }</h2>
                    </div>
                    <div>
                        <img src={detail.imagen || detail[0].imagen } alt={detail.nombre|| ""} />
                    </div>
                    <div>          
                        <div>
                            ID: {detail.id || detail[0].id}
                        </div>           
                        <div>
                            TIPO/s:{detail.tipos || detail[0].tipos}
                        </div>
                        <div>
                            ESTADÍSTICAS:
                        </div>
                        <div>
                            <p>
                            vida: {detail.vida || detail[0].vida}
                            </p>
                            <p>
                            fuerza: {detail.fuerza || detail[0].fuerza}
                            </p>
                            <p>
                            defensa: {detail.defensa || detail[0].defensa}                                
                            </p>
                            <p>
                            velocidad: {detail.velocidad || detail[0].velocidad }
                            </p>
                        </div>
                        <div>
                            <p>altura: {detail.altura || detail[0].altura}</p>
                            <p> peso: {detail.peso || detail[0].peso}</p>
                        </div>                    
                    </div>
                </div>
            
        </div>
    )
}