import React from "react";
import './card.css';
import { Link } from "react-router-dom";



export default function Card({nombre, tipos, imagen, propio,key, id}){
    if(!propio){
    return (
        <Link to={`pokemons/${id}`}>
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
            <Link to={`pokemons/${key}`}>
            <div className="targeta" key={key} >
                <img src={imagen} alt="./pokeball.png"/>
                <h3>{nombre}</h3>
                <h4>{tipos.map(el=>el.name)}</h4>
            </div>
            </Link>
        )
    
}