import React from 'react';

 var ThumbnailGallery = (props) => {
  return (
    <div className="thumbnail">
      <img src={props.image} width="95" height="125" onClick={props.click} className={'thumb'}/>
    </div>
  )
}

export default ThumbnailGallery;