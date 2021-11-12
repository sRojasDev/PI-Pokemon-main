const { v4: uuidv4 } = require('uuid');
const { Pokemon } = require('../db.js'); //importo modelo conectado
//mostrar todos
function getAllPoke(req,res,next){  
    return Pokemon.findAll()
    .then( (pokemons) => res.send(pokemons))
    .catch((err)=> next(err));    
}

//mostrar por id
function getPokemonById(req,res,next){  
    let id= req.params.id;
    return Pokemon.findByPk(id)
        .then( (pokemons) => res.send(pokemons))
        .catch( err => next(err));  
}
//mostrar por nombre
function getPokemonByName(req,res,next){
    const {name}= req.query;
    if (name){
    return Pokemon.findAll({
        where: {
            name:name,
        }})
        .then( (pokemons) => res.send(pokemons))
        .catch((err)=>  next(err));
    } else{
        res.send("algo salió mal");
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