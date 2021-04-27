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
        <li>Made with 100% cotton</li>
        <li>Wash in cold water</li>
        <li>Super Durable</li>
      </ul>
    </div>
  )
}

export default ProductDescription;