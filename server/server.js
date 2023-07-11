const express = require('express')
const cors = require('cors')
const compression = require('compression')
const axios = require('axios')
const app = express()
app.use(compression())
app.use(cors())

app.get('/', (req, res) => {
    axios.get('https://testtechnext1-pearl118.b4a.run/search/api/phases/')
    .then(response => {
        res.json(response.data)
        console.log(response.data)
    })
    .catch(error => {
        res.status(500).json({error: 'An error occured'})
        console.log(error)
    })
})

app.listen('https://technext-chart-api.onrender.com/', () => {
    console.log('Server is running on port 5000')
})