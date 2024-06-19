const express = require('express')
const notFound = require('./middlewares/notfound')
const app = express()


app.use(notFound)

const port = 8000
app.listen(port, () => console.log('Server is running on',port))