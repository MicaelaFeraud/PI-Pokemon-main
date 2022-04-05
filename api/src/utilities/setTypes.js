const axios = require('axios');
const {Types} = require('../db.js');

const setUpTypes = async() => {
    const typesLinksInExtDb = await axios.get(`https://pokeapi.co/api/v2/type`).then(p => p.data.results);
    const typesInExtDbProms = typesLinksInExtDb.map(async function (t){
        return axios.get(t.url).then(p => p.data);
    });
    const typesInExtDb = await Promise.all(typesInExtDbProms);
    await Type.bulkCreate(typesInExtDb.map(t => {return {name:t.name}}));
}
module.exports = {
    setUpTypes
}