const Router = require('express')
const router = new Router()
const trainingController = require('../controllers/trainingController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('COACH'),trainingController.create)
router.get('/', trainingController.getAll)
router.get('/:id', trainingController.getOne)

module.exports = router