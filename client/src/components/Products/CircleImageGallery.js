import React from 'react';

 var CircleImageGallery = (props) => {
  return (
    <li className="circleImg">
      <img src={props.image} width="100px" height="100px" onClick={props.show}/>
    </li>
  )
}

export default CircleImageGallery;