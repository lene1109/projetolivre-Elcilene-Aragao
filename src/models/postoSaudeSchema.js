const mongoose = require('mongoose')

const postoSaudeSchema = new mongoose.Schema({
    unidade: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        unique: true,
        required: true
    },
    vagas:{
        type: String,
        unique: true,
        required: true

    },
    
}, { timestamps: true })

const postoSaude = mongoose.model('postoSaude', postoSaudeSchema)

module.exports = postoSaude