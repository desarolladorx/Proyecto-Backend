const {mongoose, Schema} = require("mongoose");

const PersonajeSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "Nombre del Personaje"]
    },
    edad: {
        type: Number,
        required: [true, "Que edad tiene tu personaje"]
    },
    serie: {
        type: String,
        required: [true, "Em que serie aparece?"]
    },
    name: {
        type: String,
        required: [true, "Nombre del pokemon"]
    }
});

const personajeModel = mongoose.model("Personaje", PersonajeSchema);

module.exports = personajeModel;