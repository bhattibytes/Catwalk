const express = require('express');
const path = require('path');
const app = express();
const database = require('../ProductsDatabase/DB/database.js');
const { Product, Feature,  Style, Sku, Photo, RelatedProduct } = require('./DB/allProducts.js');
const { getAllProducts, getProductById, getAllProductStyles, getRelatedProducts } = require('./API/products.js');

const PORT = 5000;

app.use(express.json());
app.use(express.static(__dirname + '../../client/dist'));

app.get('/', async (req, res) => {
  await getAllProducts(req, res);
});

app.get('/products', async (req, res) => {
  await getAllProducts(req, res);
});

app.get('/products/:product_id', async (req, res) => {
  await getProductById(req, res);
});

app.get('/products/:product_id/styles', async (req, res) => {
  await getAllProductStyles(req, res);
})

app.get('/products/:product_id/related', async (req, res) => {
  await getRelatedProducts(req, res);
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});

database.authenticate()
  .then(() => console.log('Database is connected'))
  .catch(err => console.log('There was an error-->', err))