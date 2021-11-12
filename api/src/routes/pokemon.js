//archivo rutas pokemons
const {Router}= require('express');
const router = Router(); 
const { Pokemon } = require('../db.js'); //importo modelo conectado
const { v4: uuidv4 } = require('uuid');
//const {getAllPoke, getPokemonById}= require('../controllers/ctrPokemon');

router.get('/pokemons',(req,res,next) =>{
    return Pokemon.findAll()
    .then( (pokemons) => res.send(pokemons))
    .catch((err)=> {
        next(err);
    });
});
router.get('/pokemons/:id', (req,res,next) =>{
    let id= req.params.id;
    return Pokemon.findByPk(id)
        .then( (pokemons) => res.send(pokemons))
        .catch((err)=> {
        next(err);
        });
});
router.post('/pokemons', (req,res,next) =>{
    let newPokemon= req.body;
    return Pokemon.create({
        ...newPokemon,
        id: uuidv4(),
    })
        .then( (pokemons) => res.send(pokemons))
        .catch((err)=> {
        next(err);
        });
}
);





module.exports = router;
