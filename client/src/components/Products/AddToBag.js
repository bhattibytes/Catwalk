import React from 'react';
import $ from 'jquery';

 var AddToBag = () => {

  var mouseEnter = (e) => {
    $(e.target).addClass('bag-hover');
  }

  var mouseOut = (e) => {
  $(e.target).removeClass('bag-hover');
  }

  var clickAddCart = (e) => {
    console.log('add to bag was clicked!')
  }

  return (
    <div className="AddToBag">
      <button className="AddToBagBtn" onClick={clickAddCart} onMouseEnter={mouseEnter} onMouseOut={mouseOut}>ADD TO BAG</button>
    </div>
  )
}

export default AddToBag;