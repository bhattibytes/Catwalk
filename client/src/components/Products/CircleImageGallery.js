import React from 'react';

 var CircleImageGallery = (props) => {
  return (
    <li className="circleImg">
      <div className="checkDiv"></div>
      <img className="circle" src={props.image} width="75px" height="75px" onClick={props.show}/>
    </li>
  )
}

export default CircleImageGallery;