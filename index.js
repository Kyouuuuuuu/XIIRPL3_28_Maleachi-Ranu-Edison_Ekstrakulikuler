const express = require('express')
const app = express()
const port = 3030
const connectDB = require ('./config/db')
const userouter = require('./router/eskul')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(userouter)
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

