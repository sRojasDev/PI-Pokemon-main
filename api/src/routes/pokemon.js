const {Router}= require('express')
const router = Router();

router.get( '/',(req,res)=>{
    console.log("ok");
 res.send("Funciona la ruta mostrar pokemons");
} );


module.exports = router;
