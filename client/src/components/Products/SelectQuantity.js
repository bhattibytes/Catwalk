import React from 'react';

 var SelectQuantity = () => {
  return (
    <div className='selQty'>
      <label htmlFor="quantity">Select Qty</label>
      <input type="number" id="quantity" name="quantity" min="1" max="17"></input>
    </div>
  )
}

export default SelectQuantity;

// Here in the max=${props.max} we will need to refactor to put the data coming from props attached to state

// <div className='selQty'>
//       <button type="button" className="adjust-minus-qty"><span>-</span></button>
//       <input type="text" ></input>
//     </div>
