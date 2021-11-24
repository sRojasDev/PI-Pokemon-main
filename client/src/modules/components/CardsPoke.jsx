import React from "react";
import Card from './Card/Card';
// import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function CardsPoke({array, curretP}){
    const result= array?.map(pok => {
        console.log(pok.id);
        console.log(pok.hasOwnProperty("ofDB"));
        
        return <Fragment key={pok.id} >
        {/* <Link to={"pokemons/"+pok.id}> */}
        
        <Card nombre={pok.nombre} imagen={pok.imagen} tipos={pok.tipos} key={pok.id} propio={pok.hasOwnProperty('ofDB')} id={pok.id} />
        {/* </Link> */}
    </Fragment>
    })
    return result;
}
