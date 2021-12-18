const mongoose = require('mongoose')

const marcarConsultaSchema = new mongoose.Schema({
    idconsulta: mongoose.Schema.Types.ObjectId,

    Nome: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
       
        required: true
    },
    telefone:{
        type: String,
        
        required: true

    },
    
}, { timestamps: true })

const marcarConsulta = mongoose.model('marcarConsulta', marcarConsultaSchema)

module.exports = marcarConsulta