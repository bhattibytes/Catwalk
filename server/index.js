const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log('Catwalk  listening on localhost 8080')
});