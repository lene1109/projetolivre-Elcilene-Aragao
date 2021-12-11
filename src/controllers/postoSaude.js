const unidadeSaude = require('../models/postoSaudeSchema');
const getAll = async (req, res) => {
    try {
        const postoSaude = await unidadeSaude.find()
        res.status(200).json(postoSaude)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}


const registerpostoSaude = async(req, res) => {
    const { unidade, bairro, vagas } = req.body
    try {
        const newpostoSaude = new unidadeSaude({
            unidade,
            bairro,
            vagas
        })



const saveUnidade = await newpostoSaude.save()
res.status(201).json({
    messagem: "Posto de Saúde registrado com sucesso!",
    saveUnidade
})


    } catch (error) {
        res.status(500).json({
            message:error.message
        })

    }

}

module.exports = {
    getAll,
    registerpostoSaude
}