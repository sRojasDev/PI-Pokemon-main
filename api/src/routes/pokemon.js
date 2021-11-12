//archivo rutas pokemons
const {Router}= require('express');
const router = Router(); 
const { Pokemon } = require('../db.js'); //importo modelo conectado
const {
    getAllPoke,
    getPokemonById,
    getPokemonByName,
    addPokemon,
}= require('../controllers/ctrPokemon');

router.get('/pokemons/:id', getPokemonById);

router.get('/pokemons',(req,res,next) =>{
    const {name}=req.query;
    if (name){
        getPokemonByName(req,res,next);
    }else{ 
        getAllPoke(req,res,next);
    }
});
router.post('/pokemons', addPokemon);





module.exports = router;
