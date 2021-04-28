import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

const getReviewsReq = (id = 17068, sort = 'relevant', page = 1, count = 2) =>
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${id}&page=${page}&sort=${sort}&count=${count}`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });

const getReviewsMetaReq = (id = 17068) =>
  axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${id}`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });

const addReviewReq = (data) =>
  axios({
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    },
    data: data
  });

const helpfulReviewReq = (id) =>
  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/helpful`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });

const reportReviewReq = (id) =>
  axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/report`,
    headers: {
      Authorization: GITHUB_TOKEN.value
    }
  });

export { getReviewsReq, getReviewsMetaReq, addReviewReq, helpfulReviewReq, reportReviewReq };