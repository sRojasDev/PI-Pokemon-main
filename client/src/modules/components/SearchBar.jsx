import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { getPokeByName } from "../../redux/actions";

export default function SearchBar(){
    const dispatch=useDispatch();
    const [name,setName]=useState("");

    function handleInputChangue(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getPokeByName(name));
        setName("");
        document.querySelector(".input").value="";
    }
    return(
        <div>
            <input className="input" type="text"  placeholder="Buscar..." onChange={e=> handleInputChangue(e)}/>
            <button type="submit" onClick={e => handleSubmit(e)} >Buscar</button>
        </div>
    )
}