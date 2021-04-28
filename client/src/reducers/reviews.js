const initialState = {
  isLoading: true,
  isModalOn: {
    value: false,
    image: null
  },
  isFormModalOn: false,
  hasMoreReviews: true,
  sort: 'relevant',
  data: [],
  page: 1,
  meta: {},
  savedReview: false
}

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    // Get all reviews based off of product id
    case 'GET_REVIEWS':
      let newPage = state.page + 1;
      return Object.assign({}, state, {
        ...state,
        data: [...state.data, ...action.payload],
        page: newPage
      });
    // Get meta data for component
    case 'GET_META-DATA':
      return Object.assign({}, state, {
        ...state,
        meta: action.payload,
        isLoading: false
      });
    // Update has no more reviews to false
    case 'HAS_NO_REVIEWS':
      return Object.assign({}, state, {
        ...state,
        hasMoreReviews: false,
      });
    // Sort reviews by filter (newest, helpful, relevant)
    // We need to manually set page to 2 in order to run
    // the next results when user clicks  more reviews
    case 'SORT_ORDER':
      return Object.assign({}, state, {
        ...state,
        sort: action.payload.sort,
        data: action.payload.data,
      });
    // Show thumbnail image via modal
    case 'TOGGLE_MODAL':
      return Object.assign({}, state, {
        ...state,
        isModalOn: {
          value: !state.isModalOn.value,
          image: action.payload
        }
      });
    // Show form for adding review via modal
    case 'TOGGLE_FORM_MODAL':
      return Object.assign({}, state, {
        ...state,
        isFormModalOn: !state.isFormModalOn
      });
    // Load more reviews. Increment page counter
    case 'MORE_REVIEWS':
      return Object.assign({}, state, {
        ...state,
        page: newPage++,
      });
    // Add a review, once done close the modal
    case 'ADD_REVIEW':
      return Object.assign({}, state, {
        ...state,
        isFormModalOn: false
      });
    // Add a review, once done close the modal
    case 'HELPFUL_REVIEW':
      // Create a copy array of reviews
      const updatedReviews = state.data.map(review => {
        // Create a copy of item
        const item = { ...review };
        // Increment helpfulness to particular item (review)
        // action.payload is review's id
        if (item.review_id === action.payload) {
          item.helpfulness++;
        }
        return item;
      });

      return Object.assign({}, state, {
        ...state,
        data: updatedReviews,
      });
    // Add a review, once done close the modal
    case 'REPORT_REVIEW':
      // Create a copy array of reviews
      // filter out the review according to payload (payload = review's id)
      const filteredReviews = state.data.filter(review => review.review_id !== action.payload);
      return Object.assign({}, state, {
        ...state,
        data: filteredReviews,
      });
  }
  return state;
}

export default reviewsReducer;