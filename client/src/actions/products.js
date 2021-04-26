import { productStylesGetImages, getAllProducts } from '../api/products.js';
/**
 * productStylesGetImages is an async function for getting Images
 * from Atlier api
 */
export function getProducts() {
  return async function (dispatch) {
    const response = await getAllProducts();
    const products = response.data;
    await dispatch({
      type: 'GET_PRODUCTS',
      payload: products
    });
    await dispatch(getImages());
  }
}
  export function getImages() {
    return async function (dispatch, getState) {
      const products = await getState('products')
      const response = await productStylesGetImages(products.products.product.id);
      await dispatch({
        type: 'GET_IMAGES',
        payload: {
          thumbNailImages: response.thumbNailImages,
          fullSizeImage: response.fullSizeImage,
          qtyNSize: response.qtyNSize
        }
      });
    }
  }

