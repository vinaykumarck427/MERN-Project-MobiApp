const express = require('express')
const router = express.Router()
const productController = require('../app/controller/0.productController')
const specificationController = require('../app/controller/1.specificationController')
const userController = require('../app/controller/2.userController')
const compareController = require('../app/controller/3.compareController')

router.get('/products',productController.list)
router.post('/products',productController.create)
router.get('/products/:id', productController.show)
router.put('/product/:id',productController.update)
router.delete('/product/:id',productController.destroy)

router.get('/specifications', specificationController.list)
router.post('/specifications', specificationController.create)
router.get('/specifications/:id', specificationController.show)
router.put('/specifications/:id', specificationController.update)
router.delete('/specifications/:id', specificationController.destroy)


module.exports = router