const express = require('express');
const router = express.Router();
const pokemonsRoute = require('./pokemonsRoute.js');
const typeRoute = require('./typeRoute.js');


router.use('/pokemons', pokemonsRoute);
router.use('/type',typeRoute);

module.exports = router;