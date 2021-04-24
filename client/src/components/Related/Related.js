import React from 'react';
import RelatedProductCards from './RelatedProduct/RelatedProductCards.js';
import YourOutfitCards from './YourOutfit/YourOutfitCards.js';
import styles from './related.module.css';
import dummyData from './RelatedProduct/dummyData.js';

class Related extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(

    <div className={styles.relatedProductsContainer}>
      <span className={styles.relatedTitle}><b>Related Items and Comparisons</b></span>
      <RelatedProductCards dummyData={dummyData} />
      <span className={styles.outfitTitle}><b>Your Outfit</b></span>
      <YourOutfitCards dummyData={dummyData} />
    </div>


    );
  }
};

export default Related;