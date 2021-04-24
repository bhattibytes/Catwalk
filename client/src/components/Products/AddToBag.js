import React from 'react';
import $ from 'jquery';

 var AddToBag = () => {
  return (
    <div className="AddToBag">
      <button className="AddToBagBtn">ADD TO BAG</button>
    </div>
  )
}

export default AddToBag;


// var addedToBag = (e) => {
//   e.preventDefault();
//   if ($(e.currentTarget).hasClass('bagAdd')) {
//    $(e.currentTarget).removeClass('bagAdd');
//   } else {
//    $(e.currentTarget).addClass('bagAdd');
//   }
// }