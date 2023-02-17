var express = require('express');
var router = express.Router();

var Product = require('../controllers/product/with_product');

const product = new Product();

router.get('/product', product.getProduct);

module.exports = router;