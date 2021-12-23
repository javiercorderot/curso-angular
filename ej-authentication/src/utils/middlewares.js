const jwt = require('jsonwebtoken')


exports.isTokenValid = (req, res, next) => {
    const token = req.headers?.authorization

    if(token){
        try{
            const payload = jwt.verify(token, 'PALABRA_SECRETA')
            console.log(payload)
            return next()
        }
        catch(err){
            return res.status(403).json({msg: 'El token no es válido'})
        }
    }

    return res.status(403).json({msg: 'Tienes que estar logueado para hacer esta petición'})
}

