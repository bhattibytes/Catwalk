import React from 'react';
import ProductCard from './ProductCard.jsx';
import styles from './relatedItems.module.css';
import { dummyProductStyles } from '../dummyData.js';g

class Related extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div>
        <h2>Related Products</h2>
      </div>
    );
  }
};

export default Related;