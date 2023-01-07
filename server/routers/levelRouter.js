const Router = require('express')
const router = new Router()
const levelController = require('../controllers/levelController')


router.post('/', levelController.create)
router.get('/', levelController.getAll)
router.get('/:id', levelController.getOne)
router.put('/:id', levelController.update)
router.delete('/:id', levelController.delete)

module.exports = router