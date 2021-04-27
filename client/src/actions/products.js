import { getAllProducts, getAllProductStyles } from '../api/products.js';

export function getProducts() {
  return async function (dispatch) {
    const response = await getAllProducts();
    const products = response.data;
    await dispatch({
      type: 'GET_PRODUCTS',
      payload: products
    });
  }
}

  export function getStyles() {
    return async function (dispatch, getState) {
      const products = await getState('products');
      const response = await getAllProductStyles(products.products.product.id);
      const styles = response.data;
      await dispatch({
        type: 'GET_STYLES',
        payload: styles
      });
    }
  }
