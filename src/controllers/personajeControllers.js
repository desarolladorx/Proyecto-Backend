const { addPersonajeService, getPersonajeService, getPersonajeByNombreService, updatePersonajeService, deletePersonajeService } = require("../services/personajeServices");

const addPersonajeController = async (req, res) => {
    try {
        const addPersonaje = await addPersonajeService(req);
        res.status(201).json({message: `El personaje ${addPersonaje.nombre} se agregó correctamente.`});

    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const getPersonajeController = async (req, res) => {
    try {
        const personajes = await getPersonajeService();
        res.json(personajes);
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const getPersonajeByNombrecontroller = async (req, res) => {
    try {
        const personajes = await getPersonajeByNombreService(req);
        res.json(personajes);
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const updatePersonajeController = async ( req, res) => {
    try {
        const updatePersonaje = await updatePersonajeService(req);
        res.status(200).json({message: `Personaje ${updatePersonaje.nombre} modificado.`});
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const deletePersonajeController = async (req, res) => {
    try {
        const deletePersonaje = await deletePersonajeService(req);
        res.json({message: `Personaje ${deletePersonaje} borrado exitosamente.`});
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

module.exports = { addPersonajeController, getPersonajeController, getPersonajeByNombrecontroller, updatePersonajeController, deletePersonajeController }