import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

const productStylesGetThumbnails = (product_id) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/GET /products/${product_id}/styles`,
    headers: {
      Authorization: GITHUB_TOKEN
     }
  })
  .then(data => {
    var thumb = [];
    //NEED TO SEE THE REAL DATA before this can be mapped properly!!! ////
    data.forEach(product => {
      thumb.push(product.results.photos[0].thumbnail_url);
    });
    res.send(thumb)
  })
};

const productStylesGetFullSized = (id) => {
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/GET /products/${product_id}/styles`,
    headers: {
      Authorization: GITHUB_TOKEN
     }
  })
    .then(data => {
       //NEED TO SEE THE REAL DATA before this can be mapped!!!
    })
};