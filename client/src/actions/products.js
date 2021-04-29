import { getAllProducts, getAllProductStyles } from '../api/products.js';

export function getProducts() {
  return async function (dispatch) {
    const response = await getAllProducts();
    const products = response.data.results;
    await dispatch({
      type: 'GET_PRODUCTS',
      payload: products
    });
  }
}

  export function getStyles() {
    return async function (dispatch, getState) {
      const products = await getState('products');
      const { product } = await getState('product')
      const response = await getAllProductStyles(product.data.id);
      const styles = response.data.data;
      await dispatch({
        type: 'GET_STYLES',
        payload: styles
      });
    }
  }
