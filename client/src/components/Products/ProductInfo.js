import React from 'react';
import ProductTitle from './ProductTitle.js';
import SelectStyle from './SelectStyle.js';
import CircleImageGallery from './CircleImageGallery.js';
import SelectSize from './SelectSize.js';
import AddToBag from './AddToBag.js';
import Favorite from './Favorite.js';
import SelectQuantity from './SelectQuantity.js'
import Star from '../Star/Star.js';

 var ProductInfo = (props) => {
  return (
    <div className="product-info-container">
      <div className="product-star">
        <Star rating={3.5}/>
      </div>
      <ProductTitle />
      <SelectStyle />
      <ol className="circleImgBox">
      {
        props.images.map(image => {
          var imgid = image.split('/')[10];
          return <CircleImageGallery image={image} key={imgid} show={props.show}/>
        })
      }
      </ol>
      <SelectSize />
      <SelectQuantity />
      <AddToBag />
      <Favorite />
    </div>
  )
}

export default ProductInfo;