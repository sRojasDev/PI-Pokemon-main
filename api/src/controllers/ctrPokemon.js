const { v4: uuidv4 } = require('uuid');
const { Pokemon } = require('../db.js'); //importo modelo conectado
const { ALL_POKEMONS_API } = require("../../config/endPoints"); //importo path principal

const { getByName_Bd,getAll_Bd, getById_Bd}= require('./getsDb.js');// funciones get base de datos
const {asyncGetApi} = require('./getsApi.js'); 

//mostrar todos
async function getAllPoke(req,res,next){  
    try {let listaCompleta=await Promise.all( [getAll_Bd(),asyncGetApi(ALL_POKEMONS_API,null)])
        let unida= listaCompleta.flat();
    // const arrPromesas= unida.map( p => {
    //         console.log(p.url);
    //         return new Promise( Detail(p.url))
    //     });
    res.send(unida); 
    }   
    catch{(err=> next(err));}    
}

//mostrar por id
function getPokemonById(req,res,next){  
    let id = req.params.id;
    if (id){
        let resolucion= Promise.all( [getById_Bd(id),asyncGetApi(`${ALL_POKEMONS_API}/`,id)]) 
        .catch((err)=>  next(err));
        return resolucion;
    }
    else{
        res.send("se nesecita un nombre válido");
    }  
}
//mostrar por nombre
function getPokemonByName(req,res,next){
    const {name}= req.query;            // ojo se recibe por query pero la consulta a la API se hace por params
    if (name){
        let resolucion= Promise.all( [getByName_Bd(name),asyncGetApi(`${ALL_POKEMONS_API}/`,name)]) // en esta línea
        .then( (pokemons) => res.send(pokemons))
        .catch((err)=>  next(err));
        return resolucion;
    }
    else{
        res.send("se nesecita un nombre válido");
    }
}

//agregar por body
function addPokemon(req, res, next){
    let newPokemon= req.body;
    return Pokemon.create({
        ...newPokemon,
        id: uuidv4(),
        })
        .then( (pokemons) => res.send(pokemons))
        .catch((err)=>  next(err));
}
module.exports= {
    getAllPoke,
    getPokemonById,
    getPokemonByName,
    addPokemon,
};