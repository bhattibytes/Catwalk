import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

const getAllProducts = () => {
  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products`,
    headers: {
      Authorization: GITHUB_TOKEN.value
     }
  }).then(res => {
    console.log('Here is the response from the getProducts call --->', res)
    return res;
  })

};

const getAllProductStyles = (product_id) => {
  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product_id}/styles`,
    headers: {
      Authorization: GITHUB_TOKEN.value
     }
  }).then(res => {
    console.log('Here is the response from the getAllProductStyles call --->', res)
    return res;
  })
};

export { getAllProducts, getAllProductStyles };