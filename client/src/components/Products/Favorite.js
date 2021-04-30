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
    if ($(e.target).hasClass('added')) {
      $(e.target).removeClass('added');
      $(e.target).text('FAVORITE');
    } else {
      $(e.target).text('ADDED TO FAVORITES');
      $(e.target).addClass('added');
    }
  }

  return (
    <div className="favorite">
      <button className="fav-button" onMouseEnter={mouseEnter} onMouseOut={mouseOut} onClick={clickFavorite}>FAVORITE</button>
    </div>
  )
}

export default Favorite;