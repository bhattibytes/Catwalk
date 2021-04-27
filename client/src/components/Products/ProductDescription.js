import React from 'react';

 var ProductDescription = (props) => {
  return (
    <div className="description">
      <div className="prod-des">
        <span className="prod-slogan">Product Slogan. Pithy Description Or CatchPhrase</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
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