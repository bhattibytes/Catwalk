import React from 'react';

 var SelectQuantity = (props) => {
   for (var i = 0; i < props.qty.length; i++) {
   }
   var qtyMax;
  return (
    <div className='selQty'>
      <label htmlFor="quantity">Select Qty</label>

      <input type="number" id="quantity" name="quantity" min="1" max="17"></input>
    </div>
  )
}

export default SelectQuantity;