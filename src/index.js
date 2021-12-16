const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
    res.status(200).json({
        "titulo": "API ConsultaSus",
        "version": "1.0.0",
        "mensagem": "Espero que faça bom uso dessa API (:"
    })
})

module.exports = router
