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
  $("a[href='#bottom']").click(() => {
    $("html, body").animate({ scrollTop: $(document).height() }, "normal");
    return false;
  });

  return (

    <div className="product-info-container">
      <div className="product-star">
        <Star rating={3.7}/>
        <a href="#bottom" className="read">Read all reviews</a>
      </div>
      <ProductTitle title={props.product.name} cat={props.product.category} sale={props.sale}/>
      <SelectStyle styles={props.styles} selectStyle={props.selectStyle}/>
      <ol className="circleImgBox">
      {
        props.images.map((image, i) => {
          return <CircleImageGallery image={image} key={i} show={props.show}/>
        })
      }
      </ol>
      <SelectSize size={props.qty} selectSize={props.selectSize}/>
      <SelectQuantity max={props.max}/>
      <AddToBag />
      <Favorite />
    </div>
  )
}

export default ProductInfo;