import React, {useEffect, useContext, useState} from 'react';
import ProductCard from './ProductCard.js'
import styles from './yourOutfit.module.css'
import AddOutfit from './AddOutfit.js'
import dummyData from './dummyData.js';

const YourOutfitCards = (props) => {
  // console.log(props);
   // track left most card index
   const [leftIndex, setLeftIndex] = useState(0);

   // track relative movement of carousel to get true index
   const [movement, setMovement] = useState(0);

   let relatedItems = dummyData.dummyRelatedProducts;
   let displayedItems = relatedItems.slice(leftIndex, leftIndex + 1);

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
  //   <div className={styles.yourOutfitCards}>
  //   {leftIndex === 0 ? <div></div> : <button className={styles.carouselButton} onClick={previousItem}></button>}
  //   <AddOutfit onClick={nextItem}/>
  //   {displayedItems.map((relatedId, index) => {
  //     return <ProductCard relatedId={relatedId} image={props.dummyData.dummyProductStyles.results[1].photos[0].thumbnail_url} data={dummyData} movement={movement} key={index} index={index}/>
  //   })}
  //   {leftIndex === relatedItems.length - 3 ?
  //     null : <button className={styles.carouselButton} onClick={nextItem}></button>
  //   }
  // </div>
  <div className={styles.yourOutfitCards}>
    {leftIndex === 0 ? <div></div> : <button className={styles.carouselButton} onClick={previousItem}></button>}
    <div className={styles.itemCard}>
      <div className={styles.cardContents}>
        {leftIndex === relatedItems.length - 3 ?
      null : <button className={styles.addButton} onClick={nextItem}><i className="fas fa-plus"></i></button>}
        <br></br>
        <span className={styles.addText}>Add to Outfit</span>
      </div>
    </div>
    {displayedItems.map((relatedId, index) => {
      return <ProductCard relatedId={relatedId} data={props.dummyData} movement={movement} key={index} index={index}/>
    })}
    {leftIndex === relatedItems.length - 3 ?
      null : <button className={styles.carouselButton} onClick={nextItem}></button>
    }
  </div>
  )
};

export default YourOutfitCards;