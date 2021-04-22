import React from 'react';
import $ from 'jquery';

 var AddToBag = () => {
   var addedToBag = (e) => {
     e.preventDefault();
     if ($(e.currentTarget).hasClass('bagAdd')) {
      $(e.currentTarget).removeClass('bagAdd');
     } else {
      $(e.currentTarget).addClass('bagAdd');
     }
   }
  return (
    <div className="AddToBag addFavOrBag">
      <button><img src={'https://static.thenounproject.com/png/918656-200.png'} width="100px" height="100px" onClick={addedToBag}/></button>
      <h3 className="labelAdd">Add To Bag +</h3>
    </div>
  )
}

export default AddToBag;