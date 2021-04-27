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
  maxQty: 1,
  saleOrNot: [{name: '', price: 0, sale: 0}],
  saleOrDefaultPrice: {name: '', price: 0, sale: 0},
  meta: {}
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

    case 'GET_META-DATA':
      return Object.assign({}, state, {
        ...state,
        meta: action.payload,
        isLoading: false
      });
  }
  return state;
}

export default productsReducer;