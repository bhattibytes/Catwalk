import React from 'react';
import RelatedProductCards from './RelatedProductCards.js';
import styles from './relatedItems.module.css';
import { dummyProducts, dummyProductStyles } from './dummyData.js';

class Related extends React.Component {
  constructor() {
    super();
    this.state = {dummyProducts, dummyProductStyles};
  }
  render() {
    return(
      <div>
        <h3 id={styles.relatedItemsTitle}>Related Items and Comparisons</h3>
        <RelatedProductCards products={dummyProducts} />
      </div>
    );
  }
};

export default Related;