import React from "react";
import {Link} from "react-router-dom";


export default function LandingPage() {
    return (
        <div>
            <p>Usted está ingresando al mundo pokémon</p>
            <Link to="/pokemons" > 
            <button> Ingresar </button>
            </Link>
        </div>
    )
}