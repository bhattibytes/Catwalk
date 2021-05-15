const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts } = require('../../ProductsDatabase/API/products.js');
const { isRelatedPopular, isStylePopular, isProductPopular } = require('../../ProductsDatabase/API/apiHelpers.js');
const popularAll = require('../../ProductsDatabase/DB/popularAll.js');


// Router for getting all products
router.get('/', async (req, res) => {

  res.status(200).send(popularAll.popular);
  // await getAllProducts(req, res)
  // res.status(200).send(res.data.results);
});

router.get('/products', async (req, res) => {
  await getAllProducts(req, res)
  res.status(200).send(res.data.results);
});

// Router for getting a single product by ID
router.get('/:product_id', async (req, res) => {
  const { product_id } = req.params;
  var isPopular = await isProductPopular(product_id);

  if (isPopular !== null) {
    res.status(200).send(isPopular);
  } else {
    await getProductById(req, res);
    res.status(200).send(res.data);
  }
})

// Router for getting all products styles
router.get('/:product_id/styles', async (req, res) => {
  const { product_id } = req.params;
  var isPopular = await isStylePopular(product_id);

  if (isPopular !== null) {
    res.status(200).send(isPopular);
  } else {
    await getAllProductStyles(req, res);
    res.status(200).send(res.data);
  }
});

// Router for getting related products
router.get('/:product_id/related', async (req, res) => {
  const { product_id } = req.params;
  var isPopular = await isRelatedPopular(product_id)

  if (isPopular !== null) {
    res.status(200).send(isPopular);
  } else {
    await getRelatedProducts(req, res);
    res.status(200).send(res.data);
  }
});

module.exports = router;