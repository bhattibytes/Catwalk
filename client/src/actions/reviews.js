export function getReviews() {
  return {
    type: 'GET_REVIEWS'
  };
};

export function getMetaData() {
  return {
    type: 'GET_META-DATA'
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