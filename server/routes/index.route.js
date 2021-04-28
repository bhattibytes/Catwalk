const express = require('express')
const router = express.Router()

const productsRouter = require('./products/products.route.js');
const reviewsRouter = require('./reviews/reviews.route.js');

router.use('/products', productsRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;
