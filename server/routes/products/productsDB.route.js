const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts } = require('../../ProductsDatabase/API/products.js');
const { isRelatedPopular } = require('../../ProductsDatabase/API/apiHelpers.js');

// Router for getting all products
router.get('/', async (req, res) => {
  await getAllProducts(req, res)
  res.status(200).send(res.data.results);
});

router.get('/products', async (req, res) => {
  await getAllProducts(req, res)
  res.status(200).send(res.data.results);
});

// Router for getting a single product by ID
router.get('/:product_id', async (req, res) => {
  const { product_id } = req.params;
  await getProductById(req, res);
  res.status(200).send(res.data);
})

// Router for getting all products styles
router.get('/:product_id/styles', async (req, res) => {
  const { product_id } = req.params;
  await getAllProductStyles(req, res);
  res.status(200).send(res.data);
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