import React  from 'react';
import { Link } from "react-router-dom";
import imgs from "../img.js";
import styled from 'styled-components';


export default function RenderError(){
    const IMGVacia= styled.img`
    box-sizing: border-box;
    width: 100%;
    `;
    const DivVacio= styled.div`
    background: rgb(5, 5, 41, 0.81);
    display: flex;
    max-width: 40em;
    align-items: center;
    margin: auto;
    border: #000 solid 3px;
    `;
    const Mensaje= styled.h3`
    color: #fff;
    font-size: 1.5em;
    text-decoration: none;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    `;    
    return (<DivVacio>
            <Link to={"pokemons/"}>
            <div> 
            <IMGVacia src={imgs.vacio} alt="./pokeball.png" />
            <Mensaje>No se encontró el pokemón buscado</Mensaje>
            </div>
            </Link>
            </DivVacio>
        )  
}