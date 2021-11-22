import axios from 'axios';
import { POKEMONS } from '../../modules/const';

export const GET_POKEMONS="GET_POKEMONS";
export const FILTER_BY_STATUS="FILTER_BY_STATUS";
export const FILTER_BY_ORIGIN="FILTER_BY_ORIGIN";
export const ORDER_BY_NAME="ORDER_BY_NAME";
export const ORDER_BY_FORCE="ORDER_BY_FORCE";
export const GET_POKE_BY_NAME="GET_POKE_BY_NAME";


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
export function filterPokeByStatus(payload) {
    console.log(payload);
    return {
        type:FILTER_BY_STATUS,
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