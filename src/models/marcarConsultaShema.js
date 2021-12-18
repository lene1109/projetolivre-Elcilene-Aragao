const mongoose = require('mongoose')

const marcarConsultaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    Nome: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        unique: true,
        required: true
    },
    telefone:{
        type: Number,
        unique: true,
        required: true

    },
    
}, { timestamps: true })

const marcarConsulta = mongoose.model('marcarConsulta', marcarConsultaSchema)

module.exports = marcarConsulta