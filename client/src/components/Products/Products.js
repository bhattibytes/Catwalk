import React from 'react';
import Gallery from './Gallery.js';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div>
        <h2>Products</h2>
        <Gallery />
      </div>
    );
  }
};

export default Products;