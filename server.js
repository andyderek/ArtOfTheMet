const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Art of the Met is listening on port ${port}!`))