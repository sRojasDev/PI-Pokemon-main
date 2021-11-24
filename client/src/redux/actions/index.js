import axios from 'axios';
import { POKEMONS } from '../../modules/const';

export const GET_POKEMONS="GET_POKEMONS";
export const FILTER_BY_TYPE="FILTER_BY_TYPE";
export const FILTER_BY_ORIGIN="FILTER_BY_ORIGIN";
export const ORDER_BY_NAME="ORDER_BY_NAME";
export const ORDER_BY_FORCE="ORDER_BY_FORCE";
export const GET_POKE_BY_NAME="GET_POKE_BY_NAME";
export const POST_POKEMON="POST_POKEMON";
export const GET_TYPES="GET_TYPES";


export function getPokemons() {
    console.log("se despacho la accion get Pokemons");
    return function(dispatch){
        return axios.get(POKEMONS)
        .then(res => {dispatch({
                    type: GET_POKEMONS,
                    payload: res.data,
                })
            });
    }
}
export function filterPokeByType(payload) {
    console.log(payload);
    return {
        type:FILTER_BY_TYPE,
        payload: payload,
    }
}
export function filterPokeByOrigin(payload) {
    console.log(payload);
    return {
        type:FILTER_BY_ORIGIN,
        payload: payload,
    }
}
export function OrderByName(payload) {
    return {
        type:ORDER_BY_NAME, 
        payload: payload,
    }
}
export function OrderByForce(payload) {
    console.log(payload);
    return {
        type:ORDER_BY_FORCE, 
        payload: payload,
    }
}

export function getPokeByName(name) {
    console.log("se despacho accion get por nombre");
    return function(dispatch){
        return axios.get(`http://localhost:3001/pokemons?name=${name}`)
        .then(res => {
            console.log(res);
            dispatch({
                    type: GET_POKE_BY_NAME,
                    payload: res.data,
                })
            })
        .catch( err => console.log(err));    
            
    }
}
export function postPokemon(payload) {
    return async function(dispatch){
        const respuesta= await axios.post("http://localhost:3001/pokemons", payload)
        console.log(respuesta);
        return respuesta        
    }
}
export function getTypes() {
    return function(dispatch){
        return axios.get(`http://localhost:3001/types`)
        .then(res => {
            console.log("se cargaron los tipos de pokemon")
            dispatch({
                    type: GET_TYPES,
                    payload: res.data,
                })
            })
        .catch( err => console.log(err));        
    }
}

export function getPokeById(id) {
    console.log("se despacho accion get por id");
    return function(dispatch){
        return axios.get(`http://localhost:3001/pokemons/${id}`)
        .then(res => {
            console.log(res);
            dispatch({
                    type: GET_POKE_BY_NAME,
                    payload: res.data,
                })
            })
        .catch( err => console.log(err));    
            
    }
}