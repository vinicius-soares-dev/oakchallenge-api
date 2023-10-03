// Importar o Mongoose para definir o modelo
const mongoose = require("mongoose");

// Criar o modelo "Registrations" usando o esquema RegisterData
const registerDataSchema = new mongoose.Schema({
    product: String,
    description: String,
    value: Number,
    available: Boolean
});

module.exports = mongoose.model("Registrations", registerDataSchema);
