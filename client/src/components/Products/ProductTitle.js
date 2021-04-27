import React from 'react';
import $ from 'jquery';

 var ProductTitle = (props) => {
  if (props.sale.sale !== null) {
    $('p.regular-price').addClass('strike-through-red');
  } else {
    $('p.regular-price').removeClass('strike-through-red');
  }
  return (
    <div className="main-header-title">
      <span className="cat">{props.cat}</span>
      <p className="title">{props.title}</p>
      <p className="regular-price">${props.sale.price}</p>
      <p className="sale-price">{props.sale.sale ? '$' + props.sale.sale : null}</p>
    </div>
  )
}

export default ProductTitle;