const express = require('express')
const router = express.Router()

const reviewsRouter = require('./reviews/reviews.route.js');
router.use('/reviews', reviewsRouter);

module.exports = router;
