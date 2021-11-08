const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRouter = require('./pokemon.js');
const typeRouter = require('./tipo.js');

const router = Router();

router.use("/", pokemonRouter);
router.use("/", typeRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
