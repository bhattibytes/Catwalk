import React from 'react';

 var SelectQuantity = (props) => {
  return (
    <div className='selQty'>
      <label htmlFor="quantity">Select Qty</label>

      <input type="number" id="quantity" name="quantity" min="1" max={`${props.max}`}></input>
    </div>
  )
}

export default SelectQuantity;