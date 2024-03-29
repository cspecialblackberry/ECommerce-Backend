const express = require('express')
const routes = require('./routes')
const sequelize = require('./config/connection')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

const syncDB = () => {
    try {
        sequelize.sync({ force: false })
        .then(app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`)
        }))
    } catch (err) {
        console.error(err)
    }
}

syncDB()