const { v4: uuidv4 } = require('uuid');
const { Pokemon, Tipo } = require('../db.js'); //importo modelo conectado
const { ALL_POKEMONS_API} = require("../../config/endPoints"); //importo path principal
const { DataTypes, where } = require('sequelize');

const { getByName_Bd,getAll_Bd, getById_Bd}= require('./getsDb.js');// funciones get base de datos
const {asyncGetApi} = require('./getsApi.js'); 

let freno=0;

//mostrar todos
function getAllPoke(req,res,next){   
    let resolucionAll= Promise.all([getAll_Bd(),asyncGetApi(ALL_POKEMONS_API,freno)])
        .then( (pokemones) => res.send(pokemones.flat()))
        .catch((err)=>  next(err));
        return resolucionAll;     
}

//mostrar por id
function getPokemonById(req,res,next){  
    let id = req.params.id;
    console.log("llegó al ckt "+ id);
    // res.send("respuesta"+id);
    if (id && id.length>10){
        let resolucionBd= Promise.all([getById_Bd(id)])    //,asyncGetApi(`${ALL_POKEMONS_API}/`,name)]) // en esta línea
        .then( (pokemons) => res.send(pokemons[0]))
        .catch((err)=>  next(err));
        return resolucionBd;
    }
    else{
        let resolucionApi= Promise.all([asyncGetApi(`${ALL_POKEMONS_API}/`,id)])    //,asyncGetApi(`${ALL_POKEMONS_API}/`,name)]) // en esta línea
        .then( (pokemon) => res.send(pokemon.flat()[0]))
        .catch((err)=>  next(err));
        return resolucionApi;
    }
}
//mostrar por nombre
function getPokemonByName(req,res,next){
    const {name}= req.query;            // ojo se recibe por query pero la consulta a la API se hace por params
    if (name){
        let resolucion= Promise.all( [asyncGetApi(`${ALL_POKEMONS_API}/`,name, next),getByName_Bd(name)]) // en esta línea
        .then( (pokemons) => res.send(pokemons.flat()))
        .catch((err)=>  next(err));
        return resolucion;
    }
    else{
        res.send("se nesecita un nombre válido");
    }
}

//agregar por body

async function addPokemon(req, res, next){
    freno++;
    // let { nombre, imagen, vida, fuerza, defensa, velocidad, altura, peso, tipos,
    // }= req.body;
    const objPoke={
            nombre: req.body.nombre,
            imagen: req.body.imagen,
            vida: req.body.vida,
            fuerza: req.body.fuerza,
            defensa: req.body.defensa,
            velocidad: req.body.velocidad,
            altura: req.body.altura,
            peso: req.body.peso,
        }
        if (!objPoke.imagen){ objPoke.imagen= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif" }

    let creado= await Pokemon.create({
        ...objPoke,
        id: uuidv4(),
        })
    let tiposBd= await Tipo.findAll({
        where: {name: req.body.tipos}
    }).catch(err=>next(err));
    
    creado.addTipo(tiposBd);
    console.log(creado);
    res.send(creado);
    
        // .then( (pokemons) => res.send(pokemons))
        // .catch((err)=>  next(err));
}
module.exports= {
    getAllPoke,
    getPokemonById,
    getPokemonByName,
    addPokemon,
};