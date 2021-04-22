import React from 'react';

 var ThumbnailGallery = (props) => {
   if (props.borderStyle === props.image) {
     var classNm = 'show-border'
   }
  return (
    <div className="thumbnail">
      <img src={props.image} width="95" height="125" onClick={props.click} className={classNm ? classNm +' thumb' : 'thumb'}/>
    </div>
  )
}

export default ThumbnailGallery;