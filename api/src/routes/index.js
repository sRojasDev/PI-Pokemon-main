const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const pokemonRouter = require('./pokemon.js');
const typeRouter = require('./tipo');
const crtType= require('../controllers/ctrType');

//declarar las rutas
router.use("/", pokemonRouter);
router.use("/", typeRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
