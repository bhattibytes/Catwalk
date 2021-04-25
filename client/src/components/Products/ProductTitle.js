import React from 'react';

 var ProductTitle = (props) => {
  return (
    <div className="main-header-title">
      <span className="cat">{props.cat}</span>
      <p className="title">{props.title}</p>
      <p className="price">{props.price}</p>
    </div>
  )
}

export default ProductTitle;