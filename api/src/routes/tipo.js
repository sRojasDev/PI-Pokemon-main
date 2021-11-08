const {Router}= require('express');
const router = Router();

router.get( '/types',(req,res)=>{
        console.log("todo bien");
        res.send("Funciona la ruta mostrar types");
    });


module.exports = router;