import React from "react";
import "./home.css";

export default function Paginado ({pokemonsPerPage, allPokemons, paginado }) {
    const PageNumbers = [];
    const limit=Math.ceil(allPokemons/12);
    for (let i=0; i< limit ; i++){
        PageNumbers.push(i+1);
    }
    return(
        <nav className="contLista">
            <ul className="lista1" >
                {PageNumbers?.map(num=>(
                    <li className="number" key={num}>
                    <button onClick={()=>paginado(num)} className="btnDiscret" >{num}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}