const initialState = {
  isLoading: true,
  savedReview: false,
  isFormModalOn: false,
  hasMoreReviews: true,
  isModalOn: { value: false, image: null },
  meta: {},
  data: [],
  ratingsFilter: [],
  starFilters: [],
  page: 1,
  sort: 'relevant'
}

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    // Get all reviews based off of product id
    case 'GET_REVIEWS':
      let newPage = state.page + 1;
      return Object.assign({}, state, {
        ...state,
        data: [...state.data, ...action.payload],
        page: newPage,
        starFilters: [],
        ratingsFilter: []
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
    // Filter reviews based off of each star
    case 'FILTER_STARS_BY_RATING':
      const star = action.payload;
      const starSet = new Set(state.starFilters);
      let filteredReviewsByStars = [];
      const getRatingsForStar = star => state.data.filter(review => review.rating === Number(star));
      // TOGGLE current star selected
      if (!starSet.has(star)) {
        starSet.add(star);
      } else {
        starSet.delete(star);
      }
      // Filter through each selected star and concat it with the filteredReviews array
      [...starSet].forEach(star => {
        filteredReviewsByStars = filteredReviewsByStars.concat(getRatingsForStar(star));
      });
      return Object.assign({}, state, {
        ...state,
        ratingsFilter: [...filteredReviewsByStars],
        starFilters: [...starSet]
      });
  }
  return state;
}

export default reviewsReducer;