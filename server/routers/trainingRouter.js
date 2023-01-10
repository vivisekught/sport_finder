const Router = require('express')
const router = new Router()
const trainingController = require('../controllers/trainingController')
const checkRole = require('../middleware/checkRoleMiddleware')
const training_validation = require('../middleware/validator/trainingValidator')

router.post('/', training_validation, checkRole('COACH'), trainingController.create)
router.get('/', trainingController.getAll)
router.get('/:code', trainingController.getOne)
router.put('/:code', training_validation, checkRole('COACH'), trainingController.update)
router.delete('/:code', checkRole('COACH'), trainingController.delete)

module.exports = router