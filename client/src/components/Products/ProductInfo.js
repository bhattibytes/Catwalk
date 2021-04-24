import React from 'react';
import ProductTitle from './ProductTitle.js';
import SelectStyle from './SelectStyle.js';
import CircleImageGallery from './CircleImageGallery.js';
import SelectSize from './SelectSize.js';
import AddToBag from './AddToBag.js';
import Favorite from './Favorite.js';
import SelectQuantity from './SelectQuantity.js'
import Star from '../Star/Star.js';
import $ from 'jquery';

 var ProductInfo = (props) => {
  var images = props.images;
  if (images === undefined) {
    images = [''];
  }
  images = images.slice(0);

  $("a[href='#bottom']").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });
  return (
    <div className="product-info-container">
      <div className="product-star">
        <Star rating={3.7}/>
        <a href="#bottom" className="read">Read all reviews</a>
      </div>
      <ProductTitle />
      <SelectStyle />
      <ol className="circleImgBox">
      {
        images.map((image, i) => {
          return <CircleImageGallery image={image} key={i} show={props.show}/>
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