import { FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_POKEMONS, GET_POKE_BY_ID, GET_POKE_BY_NAME, GET_TYPES, ORDER_BY_FORCE, ORDER_BY_NAME, POST_POKEMON, SEARCH_IN_MY_STATE } from "../actions";

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
        case GET_POKE_BY_ID:
            console.log(action.payload);
            if(!action.payload || action.payload[0]=== null){
                return {
                    ...state,
                    error:true,
                }
            } else{
            return {
                ...state,
                detail: action.payload,
            }}
            case FILTER_BY_TYPE:
                const allPokemons =state.allPokemons;
                const stateFilter= action.payload === 'All'? allPokemons : allPokemons.filter(el=> {
                    let elem1=""
                    if(el.hasOwnProperty("ofDB")) {  
                        if (el.tipos[0].name===action.payload ||el.tipos[1].name===action.payload) {elem1= el;}
                    }  
                    if(el.tipos.includes(action.payload)) return elem1= el;
                    return elem1;
                })
                return {
                    ...state,
                    pokemons:stateFilter,
                }
        case FILTER_BY_ORIGIN:
            const allPokemons2 =state.allPokemons;
            const stateFiltered= action.payload === 'All'? allPokemons2 : allPokemons2.filter(el=> {
                let elem=""
                if(action.payload==="propio" && el.hasOwnProperty("ofDB")) elem= el;
                
                if(!el.hasOwnProperty("ofDB") && action.payload==="existente" ) elem=el;
                return elem;
            })
            return{
                ...state,
                pokemons:stateFiltered,
            }
        case ORDER_BY_FORCE: 
            let ordenadoPorFuerza= action.payload=== "asc"? 
            state.pokemons.sort(function(a,b){
                let val=0
                if ((a.fuerza-b.fuerza) < 0) val=-1;
                if ((a.fuerza - b.fuerza)>0) val= 1;
                if (a.fuerza === b.fuerza) val= 0;
                return val;
            }
            ) : state.pokemons.sort(function(a,b){
                let val=0
                if ((a.fuerza-b.fuerza) > 0) val=-1;
                if ((a.fuerza - b.fuerza)<0) val= 1;
                if (a.fuerza === b.fuerza) val= 0;
                return val;
            })
            return {
                ...state,
                pokemons:ordenadoPorFuerza,
            }
        case ORDER_BY_NAME:
            let arrOrdered= action.payload=== "asc"? 
            state.pokemons.sort(function(a,b){
                let val1=0
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) val1=-1;
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) val1= 1;
                if (a.nombre.toLowerCase() === b.nombre.toLowerCase() ) val1= 0;
                return val1;
            }
            ) : state.pokemons.sort(function(a,b){
                let val2=0
                if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) val2=-1;
                if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) val2= 1;
                if (a.nombre.toLowerCase() === b.nombre.toLowerCase() ) val2= 0;
                return val2;
            });
            return {
                ...state,
                pokemons:arrOrdered,
            }
        case GET_TYPES:
            
            return{
                ...state,
                tipos: action.payload,
            }
        case SEARCH_IN_MY_STATE:
            const allPokemons3 =state.allPokemons;
            const stateFiltered2= allPokemons3.filter(el=> {
                let elem5=""
                if(action.payload.key==="nombre" && el.nombre===action.payload.value)  elem5= el;
                return elem5;
            });
            return {
                ...state,
                detail:stateFiltered2,
            }

        default:
            console.log("entro al default reducer");
            return state
        }
}

export default rootReducer;