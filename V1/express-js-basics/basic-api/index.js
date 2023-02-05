const express = require('express')

const app = express()

app.get('', (request, response) => {
    response.send("Hello, welcome to home page")
})

app.get('/about', (request, response) => {
    response.send("Hello, welcome to about page")
})

app.get('/help', (request, response) => {
    response.send("Hello, welcome to the help page")
})

app.listen(5000, 'localhost')