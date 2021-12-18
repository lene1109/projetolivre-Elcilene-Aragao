const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const  postoSaude= require('./routes/postoSaudeRoutes')
const  consulta= require('./routes/marcarConsultaRoutes')


const app = express()

app.use(cors())
app.use(express.json())
app.use("/postoSaude", postoSaude)

app.use("/consulta",consulta )





db.connect() 

module.exports = app

