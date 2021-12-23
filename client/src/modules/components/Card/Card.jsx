import React from "react";
import './card.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokeById } from "../../../redux/actions";
import styled from "styled-components";
import imgs from "../../img.js";
import imgTipos from "../../imgTipos";




export default function Card({nombre, tipos, imagen, propio,key, id , gif, fondo}){
    const dispatch=useDispatch();
    function handleClik(){
        dispatch(getPokeById(id));
        console.log("se despachó get ID desde card");
    }
    const MyImg= styled.img`
    width: 10em;
    
    `;
    const MyGif= styled.img`
    max-width: 10em;
    display: none;
    
    `;
    
    const Targeta= styled.div`
    display:flex;
    height: 280px;
    margin: 0.6em;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    text-transform: capitalize;
    padding-bottom: 5%;
    `;
    const MarcoImg= styled.div`
    border-radius: 50% 0% 100% 0%;
    background-image: url(${fondo});
    background-position: 75% 71%;
    background-size: inherit;
    height: 40% ;
    position: relative;

        &:hover{
            transition: 0.5s;
            opacity: 1;
            
        }
    `;

    if(!propio){
        console.log(tipos);
    return (
        <Link to={`pokemons/${id}`} onClick={(e)=>handleClik(e)} >
        <Targeta className="targeta" key={key} > 
            <MarcoImg className="marco" >
            <img src={imagen} alt="./pokeball.png" className="fija" />
            <MyGif src={gif} alt="./pokeball.png" className="gif" />
            </MarcoImg>
            <div><h3>{nombre}</h3>
                <img src={imgTipos[tipos["0"]]} /> <img src={imgTipos[tipos["1"]] || ""} />
            </div>
        </Targeta>
        </Link>
    )
    }
    if (propio){
        return(
            <Link to={`pokemons/${nombre}?propio=true`} onClick={(e)=>handleClik(e)} >
            <Targeta className="targeta" key={key} >
                <MyImg src={imagen} alt={imgs.alter2} />
                <h3>{nombre}</h3>
                <div> <img src={imgTipos[tipos[0].name]|| ""} /> <img src={imgTipos[tipos["1"].name] || ""} />
            </div>
            </Targeta>
            </Link>
        )
        }
}