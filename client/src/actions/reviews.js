export function getReviews() {
  return {
    type: 'GET_REVIEWS'
  };
};

/**
 * @param {string} sort
 * sortOrder receives a string of how to sort
 * reviews based off of type
*/
export function sortOrder(sort) {
  return {
    type: 'SORT_ORDER',
    payload: sort
  };
}