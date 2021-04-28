import React, {useEffect, useContext, useState} from 'react';
import ProductCard from './ProductCard.js'
import styles from './relatedItems.module.css'
import { APIContext } from '../../../api/related.js';
import { RelatedContext } from '../RelatedContext.js';


const RelatedProductCards = (props) => {
  // debugger;
  const {
    getRelatedProducts,
    getAllRelatedProductInfo,
    getAllRelatedReviewMetaData,
    getAllRelatedStyles,
    pId,
    getProductById,
  } = useContext(APIContext);
  console.log(getRelatedProducts);
  const {
    relatedProducts,
    setRelatedProducts,
    allRelatedProductInfo,
    setAllRelatedProductInfo,
    relatedReviewMetaData,
    setRelatedReviewMetaData,
    relatedProductStyles,
    setRelatedProductStyles,
  } = useContext(RelatedContext);

  useEffect(() => {
    getRelatedProducts().then((data) => {
      getAllRelatedProductInfo(data);
      getAllRelatedReviewMetaData(data);
      getAllRelatedStyles(data);
    });
  }, []);

  //Carousel
   // track left most card index
   const [leftIndex, setLeftIndex] = useState(0);

   // track relative movement of carousel to get true index
   const [movement, setMovement] = useState(0);

   const relatedItems = allRelatedProductInfo.slice();
   const displayedItems = relatedItems.slice(leftIndex, leftIndex + 4);

   // onclick function for right arrow button
   let nextItem = () => {
     setLeftIndex(leftIndex + 1);
     setMovement(movement + 1);
   };

   // onclick function for left arrow button
   let previousItem = () => {
     setLeftIndex(leftIndex === 0 ? leftIndex - 0 : leftIndex - 1);
     setMovement(movement === 0 ? movement - 0 : movement - 1);
   };

  return (
    <div id={styles.relatedProductsContainer}>
      {leftIndex === 0 ? <div></div> : <button className={styles.carouselButton} onClick={previousItem}><i className="fas fa-angle-double-left"></i></button>}
      {displayedItems.length > 0 && displayedItems.map((product, index) =>
        <ProductCard relatedId={product.id} allReviews={relatedReviewMetaData} data={product} allStyles={relatedProductStyles} key={index}/>
      )}
      {leftIndex === relatedItems.length - 4 ?
        null : <button className={styles.carouselButton} onClick={nextItem}><i className="fas fa-angle-double-right"></i></button>
      }
    </div>
  )
};

export default RelatedProductCards;