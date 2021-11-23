import React from "react";
import './card.css';



export default function Card({nombre, tipos, imagen, propio,key}){
    if(!propio){
    return (
        
        <div className="targeta" key={key} > 
            <img src={imagen} alt="./pokeball.png" className="card-img" />
            <h3>{nombre}</h3>
            <h4>{tipos}</h4>
        </div>
    )
    }
    if (propio)
        return(
        
            <div className="targeta" key={key} >
                <img src={imagen} alt="./pokeball.png"/>
                <h3>{nombre}</h3>
                <h4>{tipos.map(el=>el.name)}</h4>
            </div>
        )
    
}