import React from 'react';
import SelectSizeOption from './SelectSizeOption.js';

 var SelectSize = (props) => {
  return (
    <div className="selSize">
       <label htmlFor="selSize">SIZE -></label>
       <select name="selSize" defaultValue="default">
        <option defaultValue="default" disabled>Select Size</option>
        {
          props.size.map((option, i) => {
            return <SelectSizeOption option={option.size} key={i} />
          })
        }
      </select>
    </div>
  )
}

export default SelectSize;