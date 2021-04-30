import axios from 'axios';
import React, { createContext, useContext } from 'react';
// import { RelatedContext } from './RelatedContext';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {

  const {
    setRelatedProducts,
    setRelatedProductInfo,
    setAllRelatedProductInfo,
  } = useContext(RelatedContext);

  const getRelatedProducts = async (product_id) => {
    try {
      const products = await axios.get(`/products/${product_id}/related`);
      setRelatedProducts(products.data);
      return (products.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getRelatedProductInfoById = async (product_id) => {
    try {
      const product = await axios.get(`/products/${product_id}`);
      setRelatedProductInfo(product.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllRelatedProductInfo = async (product_id) => {
    const productsInfo = [];
    let product;
    for (let i = 0; i < ids.length; i++) {
      product = await axios.getRelatedProductInfoById(`${product_id[i]}`);
      productsInfo.push(product.data);
    }
    setAllRelatedProductInfo(productsInfo);
  };

  return (
    <APIContext.Provider
      value={{
        getRelatedProducts,
        getRelatedProductInfoById,
        getAllRelatedProductInfo,
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;

