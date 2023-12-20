const path = require('path');

const express = require('express');

const AdminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', AdminController.getAddProduct);

router.get('/products', AdminController.getProducts);

router.post('/add-product', AdminController.postAddProduct);

module.exports = router;
