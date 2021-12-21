import React from "react";
import './card.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokeById } from "../../../redux/actions";
import styled from "styled-components";
import imgs from "../../img.js";
import imgTipos from "../../imgTipos";




export default function Card({nombre, tipos, imagen, propio,key, id}){
    const dispatch=useDispatch();
    function handleClik(){
        dispatch(getPokeById(id));
        console.log("se despachó get ID desde card");
    }
    const MyImg= styled.img`
    width: 10em;
    
    `;

    if(!propio){
        console.log(tipos);
    return (
        <Link to={`pokemons/${id}`} onClick={(e)=>handleClik(e)} >
        <div className="targeta" key={key} > 
            <img src={imagen} alt="./pokeball.png" className="card-img" />
            <h3>{nombre}</h3>
            <div> <img src={imgTipos[tipos["0"]]} /> <img src={imgTipos[tipos["1"]] || ""} />
            </div>
        </div>
        </Link>
    )
    }
    if (propio){
        return(
            <Link to={`pokemons/${nombre}?propio=true`} onClick={(e)=>handleClik(e)} >
            <div className="targeta" key={key} >
                <MyImg src={imagen} alt={imgs.alter2} />
                <h3>{nombre}</h3>
                <h4>{tipos.map(el=>{
                    return imgTipos[el.name]
                })}</h4>
            </div>
            </Link>
        )
        }
}