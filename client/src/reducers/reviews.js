import { reviewsData } from '../dummy_data/reviews.js';
const initialState = {
  sort: 'newest',
  data: []
}

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    // Get all reviews based off of product id
    case 'GET_REVIEWS':
      return Object.assign({}, state, {
        ...initialState,
        data: reviewsData.results
      });
    // Sort reviews by filter (newest, helpful, relevance)
    case 'SORT_ORDER':
      return Object.assign({}, state, {
        ...state,
        sort: action.payload
      });
  }
  return state;
}

export default reviewsReducer;