import React, {useEffect, useState} from "react";
import {useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getTypes, postPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CreaPokemon(){
    const dispach= useDispatch();
    const tipos= useSelector((state)=> state.tipos);

    const [input, setInput]= useState({
        nombre:"",
        imagen:"",
        vida:0,
        fuerza:0,
        defensa:0,
        velocidad:0,
        altura: 0,
        peso: 0,
        tipos: [],
        ofDB: true,
    })
    useEffect(()=>{
        dispach(getTypes());
    }, [])
    return (
        <div>
            <Link to={"/pokemons"} > <button>Volver</button></Link>
            <h2>Creá tu Pokémon</h2>
            <form action="">
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" value={input.nombre}  name="nombre" />
                </div>
                <div>
                    <label htmlFor="">Imagen:</label>
                    <input type="text" value={input.imagen}  name="imagen"  />
                </div>
                <div>
                    <label htmlFor="">Vida:</label>
                    <input type="number" value={input.vida}  name="vida" />
                </div>
                <div>
                    <label htmlFor="">Fuerza:</label>
                    <input type="number" value={input.fuerza} name="fuerza" />
                </div>
                <div>
                    <label htmlFor="">Defensa:</label>
                    <input type="number" value={input.defensa}  name="defensa"/>
                </div>
                <div>
                    <label htmlFor="">Velocidad:</label>
                    <input type="number" value={input.velocidad}  name="velocidad"/>
                </div>
                <div>
                    <label htmlFor="">Altura:</label>
                    <input type="number" value={input.altura}  name="altura"/>
                </div>
                <div>
                    <label htmlFor="">Peso:</label>
                    <input type="number" value={input.peso}  name="peso"/>
                </div>
                <div>
                    <label htmlFor="">Tipos:</label>
                    <input type="text" value={input.tipos}  name="tipos"/>
                </div>
            </form>
        </div>
    )
}