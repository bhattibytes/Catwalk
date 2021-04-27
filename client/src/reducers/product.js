const initialState = {
  data: {},
  isLoading: true
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    // Get all thumbnail and fullsize images based off of product id
    case 'SET_PRODUCT':
      console.log('setting product', action)
      return Object.assign({}, state, {
        ...state,
        data: action.payload,
        isLoading: false
      });
  }
  return state;
}

export default productReducer;