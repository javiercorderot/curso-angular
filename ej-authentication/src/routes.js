const router = require('express').Router()
const AuthController = require('./controllers/auth.controller')
const NoticiasController = require('./controllers/noticias.controller')
const {isTokenValid} = require('./utils/middlewares')

router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)

router.get('/noticias', NoticiasController.getNoticias)

//router.use(isValidToken)
router.post('/noticias',isTokenValid ,NoticiasController.createNoticia)
router.get('/noticias/:id', NoticiasController.getNoticia)

module.exports = router