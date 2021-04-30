import React from 'react';
import $ from 'jquery';

 var AddToBag = (props) => {

  var mouseEnter = (e) => {
    $(e.target).addClass('bag-hover');
  }

  var mouseOut = (e) => {
  $(e.target).removeClass('bag-hover');
  }

  return (
    <div className="AddToBag">
      <button className="AddToBagBtn" onClick={props.addToCart} onMouseEnter={mouseEnter} onMouseOut={mouseOut}>ADD TO BAG</button>
    </div>
  )
}

export default AddToBag;