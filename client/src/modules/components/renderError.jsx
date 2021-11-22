import React  from 'react';
import { Link } from "react-router-dom";


export default function RenderError(){    
    return (<div>
            <Link to={"pokemons/"}>
            <div className="targeta" > 
            <img src={"https://www.clipartmax.com/png/middle/17-174728_pokeball-clipart-open-pokemon-open-ball-png.png"} alt="./pokeball.png" />
            <h3>No se encontró el pokemón buscado</h3>
            </div>
            </Link>
            </div>
        )  
}