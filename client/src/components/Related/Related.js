import React from 'react';
import RelatedProductCards from './RelatedProduct/RelatedProductCards.js';
import YourOutfitCards from './YourOutfit/YourOutfitCards.js';
import styles from './related.module.css';
import dummyData from './RelatedProduct/dummyData.js';
import {RootProvider} from './RootContext.js';

class Related extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // debugger;
    return(
    <RootProvider>
    <div className={styles.relatedProductsContainer}>
      <span className={styles.relatedTitle}><b>Related Items and Comparisons</b></span>
      <RelatedProductCards  />
      <span className={styles.outfitTitle}><b>Your Outfit</b></span>
      <YourOutfitCards dummyData={dummyData} />
    </div>
    </RootProvider>


    );
  }
};

export default Related;