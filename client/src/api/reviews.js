import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

const getReviewsReq = (id = 17071) =>
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${id}`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });

const getReviewsMetaReq = (id = 17071) =>
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${id}`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });


export { getReviewsReq, getReviewsMetaReq };