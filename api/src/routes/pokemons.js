const { Router } = require('express');
const { Pokemon, Type } = require('../db.js');
const { info, forName, forId } = require('../middleware.js');
const router = Router();

//get -> trae todos los pokemons
router.get("/", async (req, res) => {
    let {name, by} = req.query;
    let pokemonInfo = [];
    if (name){
        name = name.toLowerCase();
        pokemonInfo = await forName(name);
        if (!pokemonInfo.length){
            return res.json({ info: "No se encontro el pokemon"});
        //retorna el pokemon
        }return res.json(pokemonInfo);   
    }
    pokemonInfo= await info(by);
    if (!pokemonInfo.length){
        return res.json({ info: "No hay mas registros"})
    }
    res.json(pokemonInfo);
    
});



//get/:id -> busca un pokemon por ID
router.get("/:id", async (req, res) => {
    const id = req.params;
    const pokemonInfo = await forId(id);
    if (!pokemonInfo.id) return res.json({ info: "No se encontro el pokemon"});
    res.json(pokemonInfo);
});

//post -> crea un pokemon
router.post("/", async (req, res) => {
    let {name, health, strength, defense, height, weight, speed} = req.body;
    if(isNaN(health) ||
        isNaN(strength) ||
        isNaN(defense) ||
        isNaN(height) ||
        isNaN(weight) ||
        isNaN(speed))
        return res.json({info :"Alguno de los argumentos no es un numero"});
    if (!name) return res.json({info: "El nombre es obligatorio"});

    //busca si el nombre ya existe
    const exist = await Pokemon.findOne({where: {name: name}});
    if(exist) return res.json({info: "El pokemon ya existe"});

    const pokemon = await Pokemon.create({
        name: name.toLowerCase(),

    });

    if (!tipos.length) tipos = [1];

    await pokemon.setTipos(tipos);
    res.json({info: "Pokemon creado"});
})


module.exports = router;