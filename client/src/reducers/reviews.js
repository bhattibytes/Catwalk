const initialState = {
  data: []
}

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_REVIEWS':
      console.log('getting state')
      return Object.assign({}, state, {
        data: [
          ...initialState.data,
          {
            product: 1,
            review: 3
            },
          {
            product: 2,
            review:5
          }
        ]
      });
  }

  return state;
}

export default reviewsReducer;