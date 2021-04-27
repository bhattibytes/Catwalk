import React from 'react';

 var ProductDescription = (props) => {
  return (
    <div className="description">
      <div className="prod-des">
        <span className="prod-slogan">{props.product.slogan}</span>
        <p>{props.product.description}</p>
      </div>
      <ul className="prod-details">
        <li>GMO and Pesticide-free</li>
        <li>Made with 100% nothing</li>
        <li>Wash in cold water</li>
        <li>Super Expensive</li>
      </ul>
    </div>
  )
}

export default ProductDescription;