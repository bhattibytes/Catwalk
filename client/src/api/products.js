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
    var qtyNSize = [];
    var dataArr = res.data.results;
    console.log('The entire Response Object---->', res)
    console.log('Here is the DataArr---->', dataArr)

    for (var i = 0; i < dataArr.length; i++) {

      var photos = dataArr[i].photos
      var name = dataArr[i].name;
      var arrOfQtyNSizeObjs = Object.values(dataArr[i].skus);
      var qty = arrOfQtyNSizeObjs[i].quantity;
      var size = arrOfQtyNSizeObjs[i].size;
      var element = { name, qty, size }
      qtyNSize.push(element);

      for (var k = 0; k < photos.length; k++) {
        thumb.push(photos[k].thumbnail_url);
        full.push(photos[k].url);
      }
    }
    var state = {thumbNailImages: thumb, fullSizeImage: full, qtyNSize: qtyNSize}
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


// .then(res => {

    //   var state = {
    //     thumbNailImages: [],
    //     fullSizeImage: [],
    //     qtyNSize: [],
    //   };

    //   var thumb = [];
    //   var full =[];

    //   var dataArr = res.data.results;

    //   for (var i = 0; i < dataArr.length; i++) {


    //     var name = dataArr[i].name;
    //     var price = dataArr[i].original_price;
    //     var arrOfQtyNSizeObjs = Object.values(dataArr[i].skus);
    //     var qty = arrOfQtyNSizeObjs[i].quantity;
    //     var size = arrOfQtyNSizeObjs[i].size;
    //     var element = { name, qty, size, price }
    //     qtyNSize.push(element);


    //     var photos = dataArr[i].photos;
    //   }
    //   return state;
    // })