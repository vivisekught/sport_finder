const Router = require('express')
const router = new Router()
const interestController = require('../controllers/interestController')


router.post('/', interestController.create)
router.get('/', interestController.getAll)
router.get('/:id', interestController.getOne)
router.put('/:id', interestController.update)
router.delete('/:id', interestController.delete)

module.exports = router