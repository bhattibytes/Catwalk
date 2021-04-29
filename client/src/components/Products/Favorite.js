import React from 'react';
import $ from 'jquery';

 var Favorite = () => {

  var mouseEnter = (e) => {
    $(e.target).addClass('bag-hover');
  }

  var mouseOut = (e) => {
  $(e.target).removeClass('bag-hover');
  }

  var clickFavorite = (e) => {
    console.log('favorite was clicked!')
  }

  return (
    <div className="favorite">
      <button className="fav-button" onMouseEnter={mouseEnter} onMouseOut={mouseOut} onClick={clickFavorite}>FAVORITE</button>
    </div>
  )
}

export default Favorite;