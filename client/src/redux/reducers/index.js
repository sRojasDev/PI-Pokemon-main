import { FILTER_BY_ORIGIN, FILTER_BY_STATUS, GET_POKEMONS, ORDER_BY_NAME } from "../actions";

const initialState={
    pokemons:[],
    allPokemons:[],
    propios: 0,
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
            if (action.payload==="propio") {
                return {
                    ...state,
                    pokemons:stateFilter,
                    propios: stateFilter.length,
                }
            }
            return {
                ...state,
                pokemons:stateFilter,
            }
        case FILTER_BY_ORIGIN:
            const allPokemons2 =state.allPokemons;
            const stateFiltered= action.payload === 'All'? allPokemons2 : allPokemons2.filter(el=> {
                
                if(action.payload==="propio" && el.hasOwnProperty("ofDB")) return el;
                
                if(!el.hasOwnProperty("ofDB") && action.payload==="existente" ) return el;
            })
            return{
                ...state,
                pokemons:stateFiltered,
            }
        case ORDER_BY_NAME: 
            let arrOrdered= action.payload=== "asc"? 
            state.pokemons.sort(function(a,b){
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return -1;
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return 1;
                if (a.nombre.toLowerCase() === b.nombre.toLowerCase() ) return 0;
            }
            ) : state.pokemons.sort(function(a,b){
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) return -1;
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) return 1;
                if (a.nombre.toLowerCase() === b.nombre.toLowerCase() ) return 0;
            })
            return {
                ...state,
                pokemons:arrOrdered,
            }

        default:
            console.log("entro al default reducer");
            return state
        }
}

export default rootReducer;