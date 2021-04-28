const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

// Initialize dot env
require('dotenv').config();
const routes = require('./routes/index.route');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
// Body parser middleware
app.use(bodyParser.json())
app.use('/', routes);


app.listen(PORT, () => {
  console.log('Catwalk  listening on localhost 8080')
});