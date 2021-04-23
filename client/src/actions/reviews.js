import { getReviewsReq, getReviewsMetaReq } from '../api/reviews.js';
/**
 * getReviews is an async function for getting reviews
 * from Atlier api
 */
export function getReviews() {
  return async function (dispatch) {
    const response = await getReviewsReq();
    const reviews = response.data.results;
    dispatch({
      type: 'GET_REVIEWS',
      payload: reviews
    });
  }
};
/**
 * getMetaData is an async function for getting meta data of
 * particular prodcut from Atlier api
 */
export function getMetaData() {
  return async function (dispatch) {
    const response = await getReviewsMetaReq();
    dispatch({
      type: 'GET_META-DATA',
      payload: response.data
    });
  }
};

/**
 * @param {string} sort
 * sortOrder receives a string of how to sort
 * reviews based off of type
*/
export function sortOrder(sort) {
  return async function (dispatch) {
    const response = await getReviewsReq(undefined, sort);
    const reviews = response.data.results;
    dispatch({
      type: 'SORT_ORDER',
      payload: {
        sort: sort,
        data: reviews
      }
    });
  }
}

export function moreReviews() {
  return {
    type: 'MORE_REVIEWS'
  }
}

export function addReview() {
  return {
    type: 'ADD_REVIEW'
  }
}
