//De todas las funcionalidades del controlador del cual se encarga index.
const { Router } = require("express");
const router = Router();
const {
  getPokemon,
  getID,
  postPokemon,
} = require("../controller/pokemon.js");

router.get("/index", getPokemon);
router.get("/:id", getID);
router.post("/create", postPokemon);
module.exports = router;