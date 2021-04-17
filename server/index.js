const express = require('express');
const app = express();
const PORT = 8080;
const request = require('request');

app.use(express.static(__dirname + '/../client/dist'));

// let getReposByUsername = (username) => {
//   let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/'

//   let options = {
//     url: url,
//     headers: {
//       'User-Agent': 'request',
//       'Authorization': `token ${config.TOKEN}`
//     }
//   };

//   request.get(options) => {
//     return;
//   };
// }

app.listen(PORT, () => {
  console.log('Catwalk  listening on localhost 8080')
});