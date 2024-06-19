const express = require('express')
const errorMiddleware = require('./middlewares/error-middleware')
const app = express()


app.use(errorMiddleware)

const port = 8000
app.listen(port, () => console.log('Server is running on', port))