import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/product.js';
import reviewsReducer from './reducers/reviews.js';
import productsReducer from './reducers/products.js';

/**
 * Redux store is the application's state managed by dispatches, actions, and
 * reducers. It acts as a global object for the application. Here we are creating
 * a centralized management for persistence and flow of state
 * Thunk allows us to work with asynchronous function calls
*/

export default configureStore({
  reducer: {
    product: productReducer,
    products: productsReducer,
    reviews: reviewsReducer
  }
}, applyMiddleware(thunk));