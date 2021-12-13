import React from "react";
import './card.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokeById } from "../../../redux/actions";



export default function Card({nombre, tipos, imagen, propio,key, id}){
    const dispatch=useDispatch();
    function handleClik(){
        dispatch(getPokeById(id));
        console.log("se despachó get ID desde card");
    }

    if(!propio){
    return (
        <Link to={`pokemons/${id}`} onClick={(e)=>handleClik(e)} >
        <div className="targeta" key={key} > 
            <img src={imagen} alt="./pokeball.png" className="card-img" />
            <h3>{nombre}</h3>
            <h4>{tipos}</h4>
        </div>
        </Link>
    )
    }
    if (propio)
        return(
            <Link to={`pokemons/${nombre}?propio=true`} onClick={(e)=>handleClik(e)} >
            <div className="targeta" key={key} >
                <img src={imagen} />
                <h3>{nombre}</h3>
                <h4>{tipos.map(el=>el.name)}</h4>
            </div>
            </Link>
        )
    
}