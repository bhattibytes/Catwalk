import React from 'react';
import ProductTitle from './ProductTitle.js';
import SelectStyle from './SelectStyle.js';
import CircleImageGallery from './CircleImageGallery.js';
import SelectSize from './SelectSize.js';
import AddToBag from './AddToBag.js';
import Favorite from './Favorite.js';
import SelectQuantity from './SelectQuantity.js'

 var ProductInfo = () => {
  return (
    <div className="product-info-container">
      <ProductTitle />
      <SelectStyle />
      <CircleImageGallery />
      <SelectSize />
      <SelectQuantity />
      <AddToBag />
      <Favorite />
    </div>
  )
}

export default ProductInfo;