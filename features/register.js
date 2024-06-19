const register = (req,res,next) => {

res.status(200).json('register okay')
next()

}

module.exports = register