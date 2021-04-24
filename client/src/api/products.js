import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

const productStylesGetImages = (product_id) => {
  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product_id}/styles`,
    headers: {
      Authorization: GITHUB_TOKEN.value
     }
  })
  .then(res => {
    var thumb = [];
    var full = [];
    var dataArr = res.data.results;
    for (var i = 0; i < dataArr.length; i++) {
      var photos = dataArr[i].photos
      for (var k = 0; k < photos.length; k++) {
        thumb.push(photos[k].thumbnail_url);
        full.push(photos[k].url);
      }
    }
    var state = {thumbNailImages: thumb, fullSizeImage: full}
    return state;
  })
};

const getAllProducts = () => {
  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products`,
    headers: {
      Authorization: GITHUB_TOKEN.value
     }
  });

};

export { productStylesGetImages, getAllProducts };


