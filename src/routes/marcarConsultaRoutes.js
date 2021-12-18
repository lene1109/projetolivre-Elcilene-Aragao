const express = require("express")
const router = express.Router()

const controllers = require("../controllers/marcarConsulta")

router.get("/all", controllers.getAll)
router.post("/consulta", controllers.registerusuario)
router.get("/all/:id", controllers.getById);


module.exports = router