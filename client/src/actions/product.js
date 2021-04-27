import { getAllProducts } from '../api/products.js';
/**
 * productStylesGetImages is an async function for getting Images
 * from Atlier api
 */
export function getProduct() {
  return async function (dispatch) {
    const response = await getAllProducts();
    // Get the 1st item in the results array and set it to product
    const product = response.data[0];
    await dispatch({
      type: 'SET_PRODUCT',
      payload: product
    });
  }
}