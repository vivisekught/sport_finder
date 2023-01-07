const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.checkRegistration)
router.put('/:id', userController.update)
router.get('/:id', userController.getOne)
router.delete('/:id', userController.delete)

module.exports = router