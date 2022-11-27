const axios = require('axios');

const getFavPokemon = async (req, res, next) => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemon= data.results[Math.floor(Math.random() * data.results.length)];
    req.name = pokemon.name;
    return next();
 }

module.exports = getFavPokemon;