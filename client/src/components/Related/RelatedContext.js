import React, { createContext, useContext, useState } from 'react';

export const RelatedContext = createContext({});

const RelatedProvider = ({ children }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductInfo, setRelatedProductInfo] = useState([]);
  const [allRelatedProductInfo, setAllRelatedProductInfo] = useState([]);
  const [relatedReviewMetaData, setRelatedReviewMetaData] = useState({});
  const [relatedProductStyles, setRelatedProductStyles] = useState([]);
  const [outfitStyle, setOutfitStyle] = useState([]);
  const [outfitReviewMetaData, setOutfitReviewMetaData] = useState([]);

  return (
    <RelatedContext.Provider
      value={{
        relatedProducts,
        setRelatedProducts,
        relatedProductInfo,
        setRelatedProductInfo,
        allRelatedProductInfo,
        setAllRelatedProductInfo,
        relatedReviewMetaData,
        setRelatedReviewMetaData,
        relatedProductStyles,
        setRelatedProductStyles,
        outfitStyle,
        setOutfitStyle,
        outfitReviewMetaData,
        setOutfitReviewMetaData
      }}>
        {children}
    </RelatedContext.Provider>
  );
};

export default RelatedProvider;