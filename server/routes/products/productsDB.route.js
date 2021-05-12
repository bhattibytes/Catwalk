const express = require('express');
const router = express.Router();
const localhost = 'http://localhost:3000/';
const { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts } = require('../../ProductsDatabase/API/products.js');

router.get('/:product_id', async (req, res) => {
  // const { product_id } = req.params;
  var results = await getProductById(req, res);
  console.log('DOES THIS PRINT IN THE ROUTER!!!!!---->', results)
  res.status(200).send(results);
})

// Router for getting all products
router.get('/', async (req, res) => {
  const { product_id } = req.params;
  try {
    const localResponse = await getAllProducts(req, res);
    res.status(200).json({ success: true, results: localResponse.data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed getting products.' });
  }
});

// Router for getting all products styles
router.get('/:product_id/styles', async (req, res) => {
  const { product_id } = req.params;
  try {
    const localResponse = await getAllProductStyles(req, res);
    res.status(200).json({ success: true, data: localResponse.data.results });
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed getting styles for product id ${product_id}` });
  }
});

router.get('/:product_id/related', async (req, res) => {
  const { product_id } = req.params;
  try {
    const localData = await getRelatedProducts(req, res);
    res.status(200).json({ success: true, data: localData.data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed getting related product.' });
  }
});

module.exports = router;