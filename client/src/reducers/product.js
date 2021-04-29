const initialState = {
  data: {},
  isLoading: true
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCT':
      return Object.assign({}, state, {
        ...state,
        data: action.payload,
        isLoading: false
      });
  }
  return state;
}

export default productReducer;