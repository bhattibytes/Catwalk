import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

// Feature & description
const getProductByID = (id = 17067) =>
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });

  // Price & Image
  const getProductImages = (id = 17067) =>
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });

  // Get related products' id
  const getRelatedProducts = (id = 17067) =>
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });