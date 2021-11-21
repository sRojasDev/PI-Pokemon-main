import { FILTER_BY_ORIGIN, FILTER_BY_STATUS, GET_POKEMONS } from "../actions";

const initialState={
    pokemons:[],
    allPokemons:[],
}

function rootReducer( state =initialState, action){
    switch (action.type){ 
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
            } 
        case FILTER_BY_STATUS:
            const allPokemons =state.allPokemons;
            const stateFilter= action.payload === 'All'? allPokemons : allPokemons.filter(el=> {
                console.log(el);
                return el.tipos.includes(action.payload);
            })
            return {
                ...state,
                pokemons:stateFilter,
            }
        case FILTER_BY_ORIGIN:
            const allPokemons2 =state.allPokemons;
            const stateFiltered= action.payload === 'All'? allPokemons2 : allPokemons2.filter(el=> {
                console.log(el);
                if(action.payload==="propio" && el.hasOwnProperty("ofDB")) return el;
                
                if(!el.hasOwnProperty("ofDB") && action.payload==="existente" ) return el;
            })
            return{
                ...state,
                pokemons:stateFiltered,
            }
        default:
            console.log("entro al default reducer");
            return state
        }
}

export default rootReducer;