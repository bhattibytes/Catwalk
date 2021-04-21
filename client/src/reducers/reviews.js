const initialState = {
  isLoading: true,
  sort: 'newest',
  data: [],
  meta: {}
}

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    // Get all reviews based off of product id
    case 'GET_REVIEWS':
      return Object.assign({}, state, {
        ...state,
        data: action.payload
      });
    // Get meta data for component
    case 'GET_META-DATA':
      return Object.assign({}, state, {
        ...state,
        meta: action.payload,
        isLoading: false
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