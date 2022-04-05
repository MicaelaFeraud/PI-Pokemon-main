const { Router } = require('express');
const { Pokemon, Type } = require('../db.js');
const{getPokemonById, getAllPokemons, getPokemonsByName} = require('../utilities/getPok.js')
const router = Router();
const {Op} = require('sequelize');

router.get('/', async (req, res, next) => {
    const {name} = req.query;
    try{
        if(name){
            return res.json(await getPokemonsByName(name));
        }
        return res.json(await getAllPokemons());
    }catch(err){
        res.status(400).send(err.message);
    }
});

router.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    try{
        return res.json(await getPokemonById(id));
    }catch(err){
        res.status(400).send(err.message);
    }
}); 

router.post('/', async (req, res, next) => {
    const pokemon = req.body;
    try{
        const newPokemon = await Pokemon.create(pokemon);
        const type = await Type.findAll({
            where: {
                id: {
                    [Op.in]: pokemon.typesIds 
                }
            }
        });
        await newPokemon.setTypes(types);
        const newObj = await Pokemon.findOne({
            where: {
                name: pokemon.name
            },
            include: Type
        })
        res.status(201).json(newObj);
    }catch(err){
        res.status(400).json(err.message);
    }
})


module.exports = router;