import { FILTER_BY_STATUS, GET_POKEMONS } from "../actions";

const initialState={
    pokemons:[],
}

function rootReducer( state =initialState, action){
    switch (action.type){ 
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
            } 
        case FILTER_BY_STATUS:
            const allPokemons =state.pokemons;
            const stateFilter= action.payload === 'All'? allPokemons : allPokemons.filter(el=> {
                console.log(el);
                return el.tipos.includes(action.payload);
            })
            return {
                ...state,
                pokemons:stateFilter,
            }
        default:
            console.log("entro al default reducer");
            return state
        }
}

export default rootReducer;