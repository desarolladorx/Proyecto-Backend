const { response } = require('express');
const personajeModel = require('../models/personajesModels');

const addPersonajeService = async (req) =>{
    const personaje = req.body;
    personaje.name = req.name;
    newPersonaje = new personajeModel(personaje);
    await newPersonaje.save();
    return personaje;
}

const getPersonajeService = async () => {
    return personajeModel.find();
}

const getPersonajeByNombreService = async (req) => {
    const { nombre } = req.params;
    return personajeModel.find({nombre});
}

const updatePersonajeService = async (req) => {
    const {nombre} = req.params;
    const personaje = req.body
    const updatePersonaje = await personajeModel.findOne({ nombre });
    updatePersonaje.nombre = personaje.nombre;
    updatePersonaje.edad = personaje.edad;
    updatePersonaje.serie = personaje.serie;
    await updatePersonaje.save();
  
    return updatePersonaje;
}

const deletePersonajeService = async (req) => {
    const { nombre } = req.params;
    const response = await personajeModel.deleteOne({nombre});
    if (response.deletedCount == 0) throw new Error(`No se encontró el personaje ${nombre}.`);
    return nombre;
}

module.exports = {addPersonajeService, getPersonajeService, getPersonajeByNombreService,updatePersonajeService, deletePersonajeService}