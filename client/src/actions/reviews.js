import { getReviewsReq, getReviewsMetaReq, addReviewReq, helpfulReviewReq, reportReviewReq } from '../api/reviews.js';
/**
 * getReviews is an async function for getting reviews
 * from Atlier api
 */
export function getReviews() {
  return async function (dispatch, getState) {
    // Get the current state of reviews
    const { reviews } = getState('reviews');
    // Get current state of products
    const { product } = getState('product');
    // Get the page and sort of reviews
    const { page, sort } = reviews;
    const response = await getReviewsReq(product.data.id, sort, page);
    const reviewsData = response.data.results;
    console.log(reviewsData)
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
 * particular product from Atlier api
 */
export function getMetaData() {
  return async function (dispatch, getState) {
    // Get current state of products
    const { product } = getState('product');
    const response = await getReviewsMetaReq(product.data.id);
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
    const { product } = getState('product');
    const { reviews } = getState('reviews');
    const response = await getReviewsReq(product.data.id, newSort, 1, reviews.data.length);
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
/**
 * @param {object} data
 * addReview receives an object of the user's review
 * to be saved.
*/
export function addReview(data) {
  return async function (dispatch, getState) {
    const response = await addReviewReq(data);
    if (response.status === 201) {
      return {
        type: 'ADD_REVIEW',
        payload: response.status
      }
      alert('Saved review.')
    } else {
      alert('Failed saving review');
    }
  }
}
/**
 * @param {integer} id
 * helpfulReview receives an integer of the review's id
*/
export function helpfulReview(id) {
  return async function(dispatch, getState) {
    const response = await helpfulReviewReq(id);
    if (response.status === 204) {
      await dispatch({
        type: 'HELPFUL_REVIEW',
        payload: id
      });
    } else {
      alert('Failed marking review helpful.');
    }
  }
}
/**
 * @param {integer} id
 * reportReview receives an integer of the review's id
*/
export function reportReview(id) {
  return async function(dispatch, getState) {
    const response = await reportReviewReq(id);
    if (response.status === 204) {
      await dispatch({
        type: 'REPORT_REVIEW',
        payload: id
      });
      alert('Reported review.')
    } else {
      alert('Failed reporting review.');
    }
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