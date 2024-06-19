const express = require('express')

const errorMiddleware = require('./middlewares/error-middleware')
const notFound = require('./middlewares/notfound')
const register = require('./features/register')



const app = express()

app.use('/register',register)

app.use(errorMiddleware)
app.use(notFound)


const port = 8000
app.listen(port, () => console.log('Server is running on', port))