const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const productRoutes = require('../routes/products/productsDB.route.js');
const database = require('../ProductsDatabase/DB/database.js');

const PORT = 8080;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoutes);
app.use('/', productRoutes);


app.listen(PORT, () => {
  console.log(`Server listening at localhost: ${PORT}!`);
});

database.authenticate()
  .then(() => console.log('Database is connected'))
  .catch(err => console.log('There was an error-->', err));