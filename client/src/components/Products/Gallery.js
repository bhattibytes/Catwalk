import React from 'react';

 var Gallery = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.image} width="25" height="50" onClick={props.click}/>
    </div>
  )
}

export default Gallery;