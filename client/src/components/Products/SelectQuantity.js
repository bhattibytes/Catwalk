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