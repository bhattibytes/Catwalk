import axios from 'axios';
import React, { createContext, useContext } from 'react';
import { GITHUB_TOKEN } from '../config.js';
import { RelatedContext } from '../components/Related/RelatedContext.js';

export const APIContext = createContext({});

const APIProvider = ({ children }) => {
  // context imports
  const {
    setRelatedProducts,
    setRelatedProductInfo,
    setAllRelatedProductInfo,
    setRelatedReviewMetaData,
    setRelatedProductStyles,
    setOutfitStyle,
    setOutfitReviewMetaData,
  } = useContext(RelatedContext);


  const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';
  // hard coded product id
  const pId = '17069';

  // const getAllProducts = async () => {
  //   try {
  //     await axios.get(`${baseURL}/products`, {
  //       headers: { Authorization: GITHUB_TOKEN.value },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getProductById = async (relatedId = pId) => {
    try {
      const product = await axios.get(`${baseURL}/products/${relatedId}`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      setSelectedProduct(product.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getRelatedProducts = async () => {
    try {
      const products = await axios.get(`${baseURL}/products/${pId}/related`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      setRelatedProducts(products.data);
      return (products.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getRelatedProductInfoById = async (id) => {
    try {
      const product = await axios.get(`${baseURL}/products/${id}`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      setRelatedProductInfo(product.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllRelatedProductInfo = async (ids) => {
    const productsInfo = [];
    let product;
    for (let i = 0; i < ids.length; i++) {
      product = await axios.get(`${baseURL}/products/${ids[i]}`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      productsInfo.push(product.data);
    }
    setAllRelatedProductInfo(productsInfo);
  };

  const getAllRelatedReviewMetaData = async (ids) => {
    const reviewInfo = [];
    let product;
    for (let i = 0; i < ids.length; i++) {
      product = await axios.get(`${baseURL}/reviews/meta/?product_id=${ids[i]}`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      reviewInfo.push(product.data);
    }
    setRelatedReviewMetaData(reviewInfo);
    return reviewInfo;
  };

  const getAllOutfitReviewMetaData = async (ids) => {
    const reviewInfo = [];
    let product;
    for (let i = 0; i < ids.length; i++) {
      product = await axios.get(`${baseURL}/reviews/meta/?product_id=${ids[i]}`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      reviewInfo.push(product.data);
    }
    setOutfitReviewMetaData(reviewInfo);
    return reviewInfo;
  };

  const getAllRelatedStyles = async (ids) => {
    const styles = [];
    let product;
    for (let i = 0; i < ids.length; i++) {
      product = await axios.get(`${baseURL}/products/${ids[i]}/styles`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      styles.push(product.data);
    }
    setRelatedProductStyles(styles);
  };

  const getAllOutfitStyles = async (ids) => {
    const styles = [];
    let product;
    for (let i = 0; i < ids.length; i++) {
      product = await axios.get(`${baseURL}/products/${ids[i]}/styles`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      styles.push(product.data);
    }
    setOutfitStyle(styles);
    return styles;
  };
  const getProductStyles = async () => {
    try {
      const getStyles = await axios.get(`${baseURL}/products/${pId}/styles`, {
        headers: { Authorization: GITHUB_TOKEN.value },
      });
      setStyleList(getStyles.data);
      setStyleSelected(getStyles.data.results[0]);
      return getStyles.data;
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <APIContext.Provider
      value={{
        // Products
        getAllProducts,
        getProductById,
        getRelatedProducts,
        getRelatedProductInfoById,
        getAllRelatedProductInfo,
        getAllRelatedReviewMetaData,
        getAllRelatedStyles,
        getAllOutfitStyles,
        getProductStyles,
        getAllOutfitReviewMetaData,
        pId,
      }}
    >
      {children}
    </APIContext.Provider>
  );

};

export default APIProvider;
