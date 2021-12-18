const consulta = require('../models/marcarConsultaShema');


const getAll = async (req, res) => {
    try {
        const marcar = await consulta.find()
        res.status(200).json(marcar)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
    
}
const registerusuario = async(req, res) => {
    const { Nome, bairro, telefone } = req.body
    try {
        const newcadastro = new consulta({
            Nome,
            bairro,
            telefone
        })



const savecadastro = await newcadastro.save()
res.status(201).json({
    messagem: "Consulta marcada com sucesso!",
    savecadastro
})


    } catch (error) {
        res.status(500).json({
            message:error.message
        })

    }
    
        
}
//Id
const getById = async (req, res) => {
    try {
        const { idconsulta } = req.params;

        const consul = await consulta.findById(idconsulta)

        if (consul == undefined || idconsulta == " ") {
            return res.status(404).json({
                message: "ID não localizado!"
            })
        }
        return res.status(200).json(consul)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

    



module.exports = {
    getAll,
    registerusuario,
    getById
    
  
}
