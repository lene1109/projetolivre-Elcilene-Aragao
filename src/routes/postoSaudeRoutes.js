//Objetivo da atividade: Construir os schema dos postos de saude
const express = require("express")
const router = express.Router()

const controllers = require("../controllers/postoSaude")

router.get("/all", controllers.getAll)
router.get("/all/:id", controllers.getById);
router.post('/register', controllers.registerpostoSaude)
router.delete("/delete/:id", controllers.deleteUnidade)


module.exports = router