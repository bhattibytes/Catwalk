import React from 'react';

 var ThumbnailGallery = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.image} width="50" height="100" onClick={props.click}/>
    </div>
  )
}

export default ThumbnailGallery;