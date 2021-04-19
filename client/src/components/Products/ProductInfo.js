import React from 'react';
import ProductTitle from './ProductTitle.js';
import SelectStyle from './SelectStyle.js';
import CircleImageGallery from './CircleImageGallery.js';
import SelectSize from './SelectSize.js';
import AddToBag from './AddToBag.js';
import Favorite from './Favorite.js';
import SelectQuantity from './SelectQuantity.js'

 var ProductInfo = (props) => {
  return (
    <div className="product-info-container">
      <ProductTitle />
      <SelectStyle />
      {
        props.images.map(image => {
          var imgid = image.split('/')[10];
          return <CircleImageGallery image={image} key={imgid}/>
        })
      }
      <SelectSize />
      <SelectQuantity />
      <AddToBag />
      <Favorite />
    </div>
  )
}

export default ProductInfo;