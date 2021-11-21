import React from "react";


export default function Paginado ({pokemonsPerPage, allPokemons, paginado }) {
    const PageNumbers = [];
    for (let i=0; i<Math.ceil(allPokemons/pokemonsPerPage); i++){
        PageNumbers.push(i+1);
    }
    return(
        <nav>
            <ul>
                {PageNumbers?.map(num=>(
                    <li className="number" key={num}>
                    <button onClick={()=>paginado(num)} >{num}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}