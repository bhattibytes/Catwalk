import React from 'react';

 var SelectStyle = () => {
  return (
    <div className="style-picker">
      <label for="style">STYLE -></label>
      <select name="style">
        <option value="Red and Black">Red and Black</option>
        <option value="Red and Blue">Red and Blue</option>
        <option value="Blue and Black">Blue and Black</option>
      </select>
    </div>
  )
}

export default SelectStyle;