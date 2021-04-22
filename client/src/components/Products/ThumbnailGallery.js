import React from 'react';

 var ThumbnailGallery = (props) => {
   if (props.borderStyle === props.image) {
     var classNm = 'show-border'
   }
  return (
    <div className="thumbnail">
      <img src={props.image} width="50" height="100" onClick={props.click} className={classNm ? classNm : null}/>
    </div>
  )
}

export default ThumbnailGallery;