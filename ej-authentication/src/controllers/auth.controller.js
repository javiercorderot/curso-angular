const jwt = require('jsonwebtoken')
const axios = require('axios')

const login = (req, res, next) => {
    console.log(req.body)

    const datosLogin = req.body

    axios.get(`http://localhost:3000/users?email=${datosLogin.email}`)
        .then(resp => {
            const usuarios = resp.data
            if(usuarios.length === 0){
                return res.status(401).json({msg: 'Los datos del login son incorrectos'})
            }
            else{
                const [usuario] = usuarios
                if(usuario.password === datosLogin.password){
                    const token = jwt.sign({
                        id: usuario.id,
                        username: usuario.username,
                        nombre: usuario.nombre,
                        rol: usuario.rol,
                        lang: 'es',
                        theme: 'dark',
                    }, 'PALABRA_SECRETA')
                    return res.json({token})
                }
                else{
                    return res.status(401).json({msg: 'Los datos del login son incorrectos'})
                }
            }
        }) 


   
}


const signup = (req, res, next) => {
    const datosRegistro = req.body
    datosRegistro.rol = 'USER'

    axios.get(`http://localhost:3000/users?email=${datosRegistro.email}`)
        .then(resp => {
            const usuarios = resp.data
            if(usuarios.length === 0){    
                return axios.post('http://localhost:3000/users', datosRegistro)
                // .then(resp => {
                //     console.log(resp)
                //     return res.json({data: resp.data})
                // })
            }
            else{
                res.statusCode = 409
                return Promise.resolve({data: {msg: 'El email ya existe'}})
            }
        })
        .then(resp => {
            return res.json(resp.data)
        })
}



module.exports = {
    login,
    signup
}