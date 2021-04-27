const initialState = {
  products: [],
  product: {
    name: '',
    default_price: 0,
    description: '',
    category: ''
  },
  qtyNSize: [{id: {quantity: 0, size: ''}}],
  thumbNailImages: [],
  fullSizeImage: [],
  selected: null,
  styles: [],
  styleImageArr: [{name: '', thumbNailImages: [], fullSizeImage: []}],
  maxQty: 1
}

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return Object.assign({}, state, {
        ...state,
        products: action.payload,
        product: action.payload[0]
      });

      case 'GET_STYLES':
      return Object.assign({}, state, {
        ...state,
        styles: action.payload
      });
  }
  return state;
}

export default productsReducer;