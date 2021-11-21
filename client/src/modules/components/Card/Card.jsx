import React from "react";



export default function Card({nombre, tipos, imagen, propio, dbTipo}){
    if(!propio){
    return (
        
        <div className="targeta" >
            <img src={imagen} alt="./pokeball.png" width= "130px" />
            <h3>{nombre}</h3>
            <h4>{tipos}</h4>
        </div>
    )
    }
    if (propio)
        return(
        
            <div className="targeta" >
                <img src={imagen} alt="./pokeball.png" width= "130px" />
                <h3>{nombre}</h3>
                <h4>{dbTipo.map(el=>el.name)}</h4>
            </div>
        )
    
}