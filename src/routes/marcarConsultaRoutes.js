const express = require("express")
const router = express.Router()

const controllers = require("../controllers/marcarConsulta")

router.get("/all", controllers.getAll)


module.exports = router