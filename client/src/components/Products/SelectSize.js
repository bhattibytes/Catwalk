import React from 'react';

 var SelectSize = () => {
  return (
    <div className="selSize">
       <label htmlFor="selsize">SIZE -></label>
      <select name="selsize" defaultValue="default">
        <option defaultValue="default" disabled>Select Size</option>
        <option value="xs">X-Small</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="L">Large</option>
      </select>
    </div>
  )
}

export default SelectSize;