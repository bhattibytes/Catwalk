import React from 'react';

 var MainImageView = (props) => {
  return (
    <div className="main-view main-image-container">
      <button className="back" onClick={props.back}><img src="https://snappygoat.com/b/e47653d751e21b834639d2be360b920104e04584" width="20px" height="20px"/></button>
      <img role="presentation" className="select zoom selected-image-view" src={props.select} onMouseEnter={props.enter} onMouseOut={props.out}/>
      <button className="forward" onClick={props.forward}><img src="https://snappygoat.com/b/0d7b5b00409f0b09fd19713d91dad1faeecdbff3" width="20px" height="20px"/></button>
    </div>
  )
}

export default MainImageView;