const express = require('express');
const router = express.Router();
const ProductControllers = require('../Controllers/ProductControllers');

//Products GET and POST
router.get('/', ProductControllers.getAllProducts);
router.post('/', ProductControllers.createNewProduct);

//Product id? GET, PATCH, and DELETE
router.get('/:id', ProductControllers.getProductById);
router.patch('/:id', ProductControllers.updateProductById);
router.delete('/:id', ProductControllers.deleteProductById);

module.exports = router;