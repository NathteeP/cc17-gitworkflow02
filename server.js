const express = require('express')

const errorMiddleware = require('./middlewares/error-middleware')
const notFound = require('./middlewares/notfound')
const loginApi = require('./features/login')



const app = express()

app.use("/login", loginApi)

app.use(errorMiddleware)
app.use(notFound)


const port = 8000
app.listen(port, () => console.log('Server is running on', port))