const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const  postoSaude= require('./routes/postoSaudeRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/postoSaude", postoSaude)

db.connect() 

module.exports = app