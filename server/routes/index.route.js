const express = require('express')
const router = express.Router()

const productsRouter = require('./products/products.route.js');
const reviewsRouter = require('./reviews/reviews.route.js');
const interactionsRouter = require('./interactions/interactions.route.js');

router.use('/products', productsRouter);
router.use('/reviews', reviewsRouter);
router.use('/interactions', interactionsRouter);

module.exports = router;
