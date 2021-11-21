import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Card from "./Card/Card";

export default function renderizar(array){
    array?.map(pok => {
        console.log(pok.id);
        return (
            <Fragment key={pok.id}>
                <Link to={"pokemons/"+pok.id}>
                <Card nombre={pok.nombre} imagen={pok.imagen.fija} tipos={pok.tipos} key={pok.id} />
                </Link>
            </Fragment>
        )
    })  
}