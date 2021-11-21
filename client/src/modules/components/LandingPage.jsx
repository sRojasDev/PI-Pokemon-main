import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { getPokemons } from "../../redux/actions";

export default function LandingPage() {
    const dispatch1 = useDispatch();
    useEffect(()=>{
        dispatch1(getPokemons());
        console.log("se ejecutó el primer useEffect en landing Page");
    }, [])

    return (
        <div>
            <p>Usted está ingresando al mundo pokémon</p>
            <Link to="/pokemons" > 
            <button> Ingresar </button>
            </Link>
        </div>
    )
}