require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routers/index') // main router, which connect other
const handlingErrors = require('./middleware/HandlingErrorsMiddleware')
const fileUpload = require('express-fileupload')
const path = require('path')

const PORT = process.env.PORT || 5000 //default value is 5000

const app = express()
app.use(cors())
app.use(express.json())     // app can parse into json
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use('/api', router)

app.use(handlingErrors)

const start = async () => {

    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on ${PORT}`))
    } catch (e) {
        console.log(e)
    }

}

start()