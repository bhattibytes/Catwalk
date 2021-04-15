import { reviewsData } from '../dummy_data/reviews.js';
const initialState = {
  data: []
}

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      return Object.assign({}, state, {
        data: reviewsData.results
      });
  }
  return state;
}

export default reviewsReducer;