import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

const getReviewsReq = (id) =>
  axios({
    method: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=17067',
    headers: {
      Authorization: GITHUB_TOKEN
     }
  });