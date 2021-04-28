import axios from 'axios';
import { GITHUB_TOKEN } from '../config.js';

const getReviewsReq = (id = 17068, sort = 'relevant', page = 1, count = 2) =>
  axios({
    method: 'GET',
    url: `/reviews/?product_id=${id}&page=${page}&sort=${sort}&count=${count}`
  });

const getReviewsMetaReq = (id = 17068) =>
  axios({
    method: 'GET',
    url: `/reviews/meta/?product_id=${id}`
  });

const addReviewReq = (data) =>
  axios({
    method: 'POST',
    url: `/reviews/`,
    data: data
  });

const helpfulReviewReq = (id) =>
  axios({
    method: 'PUT',
    url: `/reviews/${id}/helpful`
  });

const reportReviewReq = (id) =>
  axios({
    method: 'PUT',
    url: `/reviews/${id}/report`
  });

export { getReviewsReq, getReviewsMetaReq, addReviewReq, helpfulReviewReq, reportReviewReq };