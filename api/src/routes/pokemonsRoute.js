const express = require('express');
const router = express.Router();
const {getPokemon,getPokemonId,getPokemonName,postPokemon} = require ('../utils/controllers/pokemons.js')

router.get('/', getPokemon)

router.get('/name', getPokemonName)

router.get('/:idPokemon', getPokemonId)

router.post('/', postPokemon)
    

module.exports = router;