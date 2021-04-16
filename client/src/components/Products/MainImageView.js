import React from 'react';

 var MainImageView = (props) => {
  return (
    <div className="main-view">
      <button className="back" onClick={props.back}><img src="https://snappygoat.com/b/e47653d751e21b834639d2be360b920104e04584" width="20px" height="20px"/></button>
      <img className="select" src={props.select} width="200" height="300" border="2px"/>
      <button className="forward" onClick={props.forward}><img src="https://snappygoat.com/b/0d7b5b00409f0b09fd19713d91dad1faeecdbff3" width="20px" height="20px"/></button>
    </div>
  )
}

export default MainImageView;