import { getReviewsReq, getReviewsMetaReq } from '../api/reviews.js';
/**
 * getReviews is an async function for getting reviews
 * from Atlier api
 */
export function getReviews() {
  return async function (dispatch, getState) {
    // Get the current state of reviews
    const { reviews } = getState('reviews');
    // Get current state of products
    const { products } = getState('products');
    const { product } = products;
    // Get the page and sort of reviews
    const { page, sort } = reviews;
    const response = await getReviewsReq(product.id, sort, page);
    const reviewsData = response.data.results;
    // If reviews has less than 2, update hasMoreReviews state to false
    if (reviewsData.length < 2) {
      dispatch({
        type: 'HAS_NO_REVIEWS',
      });
    }
    // Update reviews 2 more items
    dispatch({
      type: 'GET_REVIEWS',
      payload: reviewsData
    });
  }
};
/**
 * getMetaData is an async function for getting meta data of
 * particular prodcut from Atlier api
 */
export function getMetaData() {
  return async function (dispatch, getState) {
    // Get current state of products
    const { products } = getState('products');
    const { product } = products;
    const { id } = product
    const response = await getReviewsMetaReq(id);
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
export function sortOrder(newSort) {
  return async function (dispatch, getState) {
    // Get current state of products
    const { products } = getState('products');
    const { product } = products;
    const response = await getReviewsReq(product.id, newSort, 1);
    const reviewsData = response.data.results;
    await dispatch({
      type: 'SORT_ORDER',
      payload: {
        sort: newSort,
        data: reviewsData
      }
    });
  }
}

export function toggleModal(image) {
  return {
    type: 'TOGGLE_MODAL',
    payload: image
  }
}

export function toggleFormModal(image) {
  return {
    type: 'TOGGLE_FORM_MODAL'
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
