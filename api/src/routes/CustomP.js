const {Router} = require('express');
const router = Router();
const {Pokemon, Type} = require('../db.js');

router.get('/', async (req, res,next) => {
    try{
        let pokemonsInDb = await Pokemon.findAll({include: Type});
        let FEPokemons = pokemonsInDb.map(p =>{
            return {
                id: p.id,
                name: p.name,
                img: p.url,
                types : p.types.map(t=>t.name),
                attack: p.attack,
            }
        });
        return res.json(FEPokemons);
    }catch(e){
        res.status(400).send(error.message);
    }
})

module.exports = router;