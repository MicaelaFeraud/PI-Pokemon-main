const { Router } = require('express');
const {Type} = require('../db.js');
const router = Router();


router.get('/', async (req, res, next) => {
    try{
        return res.json(await Type.findAll());
    }catch(err){
        res.status(400).send(err.message);
    }

})

module.exports = router;