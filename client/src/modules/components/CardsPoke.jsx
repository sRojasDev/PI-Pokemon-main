import React from "react";
import Card from './Card/Card';
import { Fragment } from "react";
import styled from "styled-components";

export default function CardsPoke({array, curretP}){

    const result= array?.map(pok => {
        console.log(pok.id);
        
        return <Fragment key={pok.id} >
        
        
        <Card nombre={pok.nombre} imagen={pok.imagen} tipos={pok.tipos} key={pok.id} propio={pok.hasOwnProperty('ofDB')} id={pok.id} />
        
    </Fragment>
    })
    return result;
}
