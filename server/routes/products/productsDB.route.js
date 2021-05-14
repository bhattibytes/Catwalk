const express = require('express');
const router = express.Router();
const axios = require('axios');
const localhost = 'http://localhost:5000';
const { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts } = require('../../ProductsDatabase/API/products.js');
const db = require('../../ProductsDatabase/DB/database.js');

router.get('/:product_id', async (req, res) => {
  const { product_id } = req.params;
  await getProductById(req, res);
  res.status(200).send(res);
})

// Router for getting all products
router.get('/', async (req, res) => {

  await getAllProducts(req, res)
  res.status(200).send(res.data.results);

});

// Router for getting all products styles
router.get('/:product_id/styles', async (req, res) => {
  const { product_id } = req.params;

  await getAllProductStyles(req, res);
  res.status(200).send(res.data);
});

router.get('/:product_id/related', async (req, res) => {
  const { product_id } = req.params;

  await getRelatedProducts(req, res);
  res.status(200).send(res);
});

module.exports = router;