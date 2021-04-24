import React from 'react';
import RelatedProductCards from './RelatedProduct/RelatedProductCards.js';
import YourOutfitCards from './YourOutfit/YourOutfitCards.js';
import styles from './related.module.css';
import { dummyProducts, dummyProductStyles, dummyFeature, dummyRelatedProducts } from './RelatedProduct/dummyData.js';

class Related extends React.Component {
  constructor() {
    super();
    this.state = {dummyProducts, dummyProductStyles, dummyFeature};
  }
  render() {
    return(

    <div className={styles.relatedProductsContainer}>
      <span className={styles.relatedTitle}><b>Related Items and Comparisons</b></span>
      <RelatedProductCards products={dummyProducts} related={dummyRelatedProducts} feature={dummyFeature} />
      <span className={styles.outfitTitle}><b>Your Outfit</b></span>
      <YourOutfitCards products={dummyProducts} related={dummyRelatedProducts} feature={dummyFeature} />
    </div>


    );
  }
};

export default Related;