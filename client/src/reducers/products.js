const initialState = {
  products: [],
  product: {},
  thumbNailImages: [],
  fullSizeImage: [],
  selected: null
}

function productsReducer(state = initialState, action) {
  switch (action.type) {
    // Get all thumbnail and fullsize images based off of product id
    case 'GET_PRODUCTS':
      return Object.assign({}, state, {
        ...state,
        products: action.payload,
        product: action.payload[0]
      });

    case 'GET_IMAGES':
      return Object.assign({}, state, {
        ...state,
        thumbNailImages: action.payload.thumbNailImages,
        fullSizeImage: action.payload.fullSizeImage,
        qtyNSize: action.payload.qtyNSize
      });
  }
  return state;
}

export default productsReducer;