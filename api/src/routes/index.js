// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
const { Router } = require("express");
const router = Router();
const pokemonRoute = require("./pokemon.js");
const typesRoute = require("./types.js");

router.use("/pokemon", pokemonRoute);
router.use("/types", typesRoute);

module.exports = router;