const initialState = {
  data: [
    {
    product: 1,
    review: 3
    },
    {
      product: 2,
      review:5
    }
  ]
}

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      return Object.assign({}, state, {
        data: [
          ...state.reviews
        ]
      });
  }

  return state;
}

export default reviewsReducer;