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

        const users = await unidadeSaude.findById(id)

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

const deleteUnidade = async(req, res) => {
    try {
        const unidade = await unidadeSaude.findById(req.params.id);

        if (unidade == null) {
            res.status(404).json({ message: "Unidade de Saúde não encontrado!" })
        }
        if(unidade.termosDeuso == false) {
            await unidade.delete();
             res.status(204).json({message:" Seu cadastro foi deletado,erro"});
        }

        await unidade.delete();
         res.status(200).json({ message: "Cadastro da Unidade de Saúde  deletado com sucesso!" })
    } catch (error) {
         res.status(500).json({ message: error.message })
    }

    //
}

const update = async (req, res) => {
    try {
        const updateUni = await unidadeSaude.findById(req.params.id);
        if (updateUni) {
          
            updateUni.unidade = req.body.unidade || updateUni.unidade
            updateUni.bairro = req.body.bairro || updateUni.bairro
            updateUni.vagas = req.body.vagas || updateUni.vagas

            const saveUnidade = await updateUni.save();
            res.status(200).json({
                message: "Cadastro  atualizado com suceso",
                saveUnidade
            })
        }

        res.status(400).json({
            mensagem: "Não conseguimos encontrar esse cadastro"
        })
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }


    



    //

    

}

module.exports = {
    getAll,
    getById,
    registerpostoSaude,
    deleteUnidade,
    update
    
 
    
 
    
}