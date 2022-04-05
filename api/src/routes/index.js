const { Router } = require('express');
const PokemonsRoute = require('./Pokemons.js');
const TypesRoute = require('./Types.js');
const CustomPRoute = require('./CustomP.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use ('/pokemons', PokemonsRoute);
router.use ('/types', TypesRoute);
router.use ('/customP', CustomPRoute);

module.exports = router;

