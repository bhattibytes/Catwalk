const express = require('express')
const router = express.Router()

const productsRouter = require('./products/products.route.js');
const reviewsRouter = require('./reviews/reviews.route.js');
const relatedRouter = require('./related/related.route.js');

router.use('/products', productsRouter);
router.use('/reviews', reviewsRouter);
router.use('/related', relatedRouter);

module.exports = router;
