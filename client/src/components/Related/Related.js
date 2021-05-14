import React from 'react';
import RelatedProductCards from './RelatedProduct/RelatedProductCards.js';
import YourOutfitCards from './YourOutfit/YourOutfitCards.js';
import styles from './related.module.css';
// import dummyData from './RelatedProduct/dummyData.js';
// import dummyData1 from './YourOutfit/dummyData.js';
// import {tracker} from '../../actions/tracker.js'


class Related extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    // debugger;
    return(

    <div className={styles.relatedProductsContainer} >
      <div className={styles.relatedItemsTitle}><h2>Related Items and Comparisons</h2></div>
      {/* <RelatedProductCards dummyData={dummyData}/> */}
      <div className={styles.outfitTitle}><h2>Your Outfit</h2></div>
      {/* <YourOutfitCards dummyData={dummyData1}/> */}
    </div>



    );
  }
};

export default Related;