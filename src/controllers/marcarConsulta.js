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
module.exports = {
    getAll,
    
  
}