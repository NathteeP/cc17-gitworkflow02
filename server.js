const express = require('express')

const errorMiddleware = require('./middlewares/error-middleware')
const notFound = require('./middlewares/notfound')
<<<<<<< HEAD
const loginApi = require('./features/login')
=======
const register = require('./features/register')
>>>>>>> 0fa7222dca1b4e0a7a111cce572ec094d7495d6c



const app = express()

<<<<<<< HEAD
app.use("/login", loginApi)
=======
app.use('/register',register)
>>>>>>> 0fa7222dca1b4e0a7a111cce572ec094d7495d6c

app.use(errorMiddleware)
app.use(notFound)


const port = 8000
app.listen(port, () => console.log('Server is running on', port))