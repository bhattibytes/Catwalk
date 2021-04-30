import React, {useEffect, useContext, useState} from 'react';
import ProductCard from './ProductCard.js'
import styles from './relatedItems.module.css'



const RelatedProductCards = (props) => {
  // console.log(props);
  //Carousel
   // track left most card index
   const [leftIndex, setLeftIndex] = useState(0);

   // track relative movement of carousel to get true index
   const [movement, setMovement] = useState(0);

   let relatedItems = props.dummyData.dummyRelatedProductsId;
   let displayedItems = relatedItems.slice(leftIndex, leftIndex + 4);

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
    <div className={styles.relatedProducts}>
      {leftIndex === 0 ? <div></div> : <button className={styles.carouselButton} onClick={previousItem}><i className="fas fa-angle-double-left"></i></button>}
      {displayedItems.map((relatedId, index) => {
        return <ProductCard relatedId={relatedId} data={props.dummyData} movement={movement} key={index} index={index}/>
      })}
      {leftIndex === relatedItems.length - 4 ?
        null : <button className={styles.carouselButton} onClick={nextItem}><i className="fas fa-angle-double-right"></i></button>
      }
    </div>
  )
};

export default RelatedProductCards;