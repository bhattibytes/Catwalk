import React from 'react';
import SelectStyleOption from './SelectStyleOption.js';

 var SelectStyle = (props) => {
  return (
    <div className="style-picker">
      <div className="style-picker">
        <label htmlFor="style">STYLE -></label>
        <select name="style">
          <option defaultValue="default" disabled>Select Style</option>
          {
            props.styles.map((style, i) => {
              return <SelectStyleOption name={style.name} key={i}/>
            })
          }
        </select>
      </div>
    </div>
  )
}

export default SelectStyle;