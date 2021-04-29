import React from 'react';
import $ from 'jquery';

 var ProductTitle = (props) => {
  if (props.sale.sale !== null) {
    $('p.placeholder').hide();
    $('p.sale-price').show();
    $('p.regular-price').addClass('strike-through-red');
    // $('p.sale-price').addClass('no-margin');
  } else {
    $('p.regular-price').removeClass('strike-through-red');
    // $('p.sale-price').removeClass('no-margin');
    $('p.sale-price').hide();
    $('p.placeholder').show();
  }
  return (
    <div className="main-header-title">
      <span className="cat">{props.cat}</span>
      <p className="title">{props.title}</p>
      <p className="regular-price">${props.sale.price}</p>
      <p className="sale-price">{props.sale.sale ? '$' + props.sale.sale : null}</p>
      <p className="placeholder" hidden>$100</p>
    </div>
  )
}

export default ProductTitle;