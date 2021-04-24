import React from 'react';

 var CircleImageGallery = (props) => {
  return (
    <li className="circleImg">
      <img src={props.image} width="50px" height="50px" onClick={props.show}/>
    </li>
  )
}

export default CircleImageGallery;