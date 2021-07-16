const express = require('express');
const {getTypes,getDBTypes} = require('../utils/controllers/types');
const router = express.Router();

router.get('/find', getDBTypes)
router.get('/', getTypes)

module.exports = router;