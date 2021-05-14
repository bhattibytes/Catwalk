import axios from 'axios';

const getAllProducts = () => {
  return axios({
    method: 'GET',
    url: `/products`
  }).then(data => {
    return data;
  })
};

const getAllProductStyles = (product_id) => {
  return axios({
    method: 'GET',
    url: `/products/${product_id}/styles`
  }).then(data => {
    return data;
  })
};


export { getAllProducts, getAllProductStyles };




// const getCartProductList = () => {
//   return axios({
//     method: 'GET',
//     url: `/cart`
//   });
// };

// const addToCart = (sku_id) => {
//   return axios({
//     method: 'POST',
//     url: `/cart/${sku_id}`
//   });
// };