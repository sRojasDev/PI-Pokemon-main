import { FILTER_BY_ORIGIN, FILTER_BY_STATUS, GET_POKEMONS, GET_POKE_BY_NAME, GET_TYPES, ORDER_BY_FORCE, ORDER_BY_NAME, POST_POKEMON } from "../actions";

const initialState={
    pokemons:[],
    allPokemons:[],
    tipos:[],
}

function rootReducer( state =initialState, action){
    switch (action.type){ 
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                error:false,
            } 
        case POST_POKEMON:
            return{ 
                ...state,
            }
        case GET_POKE_BY_NAME:
            if(!action.payload || action.payload[0]=== null){
                return {
                    ...state,
                    error:true,
                }
            } else{
            return {
                ...state,
                pokemons:action.payload,
            }}
        case FILTER_BY_STATUS:
            const allPokemons =state.allPokemons;
            const stateFilter= action.payload === 'All'? allPokemons : allPokemons.filter(el=> {
                if(el.hasOwnProperty("ofDB")) return  el.tipos.filter(tip=>{ return tip.name===action.payload});
                if(el.tipos.includes(action.payload)) return el;
            })
            return {
                ...state,
                pokemons:stateFilter,
            }
        case FILTER_BY_ORIGIN:
            const allPokemons2 =state.allPokemons;
            const stateFiltered= action.payload === 'All'? allPokemons2 : allPokemons2.filter(el=> {
                
                if(action.payload==="propio" && el.hasOwnProperty("ofDB")) return el;
                
                if(!el.hasOwnProperty("ofDB") && action.payload==="existente" ) return el;
                return 
            })
            return{
                ...state,
                pokemons:stateFiltered,
            }
        case ORDER_BY_FORCE: 
            let ordenadoPorFuerza= action.payload=== "asc"? 
            state.pokemons.sort(function(a,b){
                if ((a.fuerza-b.fuerza) < 0) return -1;
                if ((a.fuerza - b.fuerza)>0) return 1;
                if (a.fuerza === b.fuerza) return 0;
                return("nada");
            }
            ) : state.pokemons.sort(function(a,b){
                if ((a.fuerza-b.fuerza) > 0) return -1;
                if ((a.fuerza - b.fuerza)<0) return 1;
                if (a.fuerza === b.fuerza) return 0;
                return("nada");
            })
            return {
                ...state,
                pokemons:ordenadoPorFuerza,
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
        case GET_TYPES:
            console.log(action.payload);
            return{
                ...state,
                tipos: action.payload,
            }

        default:
            console.log("entro al default reducer");
            return state
        }
}

export default rootReducer;