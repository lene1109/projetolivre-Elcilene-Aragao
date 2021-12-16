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

//Id
const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await Users.findById(id)

        if (users == undefined || id == " ") {
            return res.status(404).json({
                message: "ID não localizado!"
            })
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Id





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
    getById,
    registerpostoSaude
}