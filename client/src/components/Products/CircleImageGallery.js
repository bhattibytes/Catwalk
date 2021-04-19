import React from 'react';

 var CircleImageGallery = (props) => {
  return (
    <div className="circleImgBox">
      <img className="circleImg" src={props.image} width="100px" height="100px"/>
    </div>
  )
}

export default CircleImageGallery;