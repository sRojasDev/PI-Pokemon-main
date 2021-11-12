//imports
const {Router}= require('express')
const router = Router();
const contrTypes= require('../controllers/ctrType');  //controlador

// rutas
router.get( '/types',contrTypes); 

//exports
module.exports = router;
