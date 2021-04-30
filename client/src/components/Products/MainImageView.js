import React from 'react';
import $ from 'jquery';

 var MainImageView = (props) => {

  var selectClicked = (e) => {
    $(e.target).addClass('clicked');
    $('button.forward').hide();
    $('button.back').hide();
    $('.description').hide();
    $('.social-shares').hide();
  }

  // var handleZoom = (e) => {
  //   let zoomDiv = $('clicked')
  //   if ($('img.select').hasClass('clicked')) {
  //     zoomDiv.scrollTop = e.movementY + 2.5;
  //     zoomDiv.scrollLeft = e.movementX + 2.5;
  //   }
  // }

  return (
    <div className="main-view main-image-container">
      <button className="back" onClick={props.back}><img src="https://snappygoat.com/b/e47653d751e21b834639d2be360b920104e04584" width="20px" height="20px"/></button>
      <img role="presentation" className="select zoom selected-image-view" src={props.select} onMouseOut={props.out} onClick={selectClicked} />
      <button className="forward" onClick={props.forward}><img src="https://snappygoat.com/b/0d7b5b00409f0b09fd19713d91dad1faeecdbff3" width="20px" height="20px"/></button>
    </div>
  )
}

export default MainImageView;