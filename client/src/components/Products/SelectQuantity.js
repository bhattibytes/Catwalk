import React from 'react';

 var SelectQuantity = (props) => {
  return (
    <div className='selQty'>
      <label className="labelSyt" htmlFor="quantity">--Quantity--</label>
      <input type="number" id="quantity" name="quantity" min="1" max={`${props.max}`} onChange={props.selectQty}></input>
    </div>
  )
}

export default SelectQuantity;