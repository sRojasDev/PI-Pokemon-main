import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { getPokemons, filterPokeByOrigin } from "../../redux/actions";

export default function LandingPage() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPokemons());
        console.log("se ejecutó el primer useEffect en landing Page");
    }, [])

    
    

    return (
        <div>
            <p>Usted está ingresando al mundo pokémon</p>
            <Link to="/pokemons" > 
            <button onClick={e=>{dispatch(filterPokeByOrigin("existente"))}} > Ingresar </button>
            </Link>
        </div>
    )
}