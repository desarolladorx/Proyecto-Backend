const express = require('express');
const { getPersonajeController, getPersonajeByNombrecontroller, updatePersonajeController, addPersonajeController, deletePersonajeController } = require('../controllers/personajeControllers');
const filterMiddleware = require('../utils/middlewares/filterMiddleware');
const validator = require('../utils/middlewares/validator');
const { body } = require('express-validator');
const getFavPokemon = require('../utils/middlewares/getFavPokemon');
const router = express.Router();

router.get('/personaje', getPersonajeController);
router.get('/personaje/:nombre', getFavPokemon, getPersonajeByNombrecontroller);
router.put('/personaje/:nombre', updatePersonajeController);
router.post('/personaje', 
    body("nombre").isLength({ min: 3, max: 15 }),
    body("serie").isLength({ min: 5, max: 25 }), 
    validator, 
    filterMiddleware,
    getFavPokemon, 
    addPersonajeController);
router.delete('/personaje/:nombre', deletePersonajeController);

module.exports = router;