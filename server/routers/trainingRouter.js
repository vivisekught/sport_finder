const Router = require('express')
const router = new Router()
const trainingController = require('../controllers/trainingController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('COACH'), trainingController.create)
router.get('/', trainingController.getAll)
router.put('/:code', trainingController.update)
router.get('/:code', trainingController.getOne)
router.delete('/:code', trainingController.delete)

module.exports = router