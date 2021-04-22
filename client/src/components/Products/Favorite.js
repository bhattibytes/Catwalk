import React from 'react';
import $ from 'jquery';

 var Favorite = () => {
  var addedToFav = (e) => {
    e.preventDefault();
    if ($(e.currentTarget).hasClass('favAdd')) {
     $(e.currentTarget).removeClass('favAdd');
    } else {
     $(e.currentTarget).addClass('favAdd');
    }
  }
  return (
    <div className="favorite addFavOrBag">
      <button><img src="https://apps.shopifycdn.com/listing_images/decd3084187b00ba26d5b77e532be5fe/icon/508c4711cd21aebc727137e8ad9a80f2.png" width="100px" height="100px" onClick={addedToFav}/></button>
      <h3 className="labelFav">Favorite Item</h3>
    </div>
  )
}

export default Favorite;