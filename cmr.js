const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('deee'))

app.get('/', (req, res) => res.sendFile(__dirname + '/deee/htmls/index.html'))
