import React from 'react';
import SelectSizeOption from './SelectSizeOption.js';

 var SelectSize = (props) => {
  var obj = props.size;
  var sizeQtyArr = [];
  for (var option in obj) {
    var sqObj = obj[option];
    sizeQtyArr.push(sqObj);
  }

  return (
    <div className="selSize">
       <label className="labelSyt" htmlFor="selSize">--SIZE--</label>
       <select name="selSize" defaultValue="default" onChange={props.selectSize}>
        <option defaultValue="default" disabled>Select Size</option>
        {
           sizeQtyArr.map((option, i) => {
            return <SelectSizeOption option={option.size} key={i} />
          })
        }
      </select>
    </div>
  )
}

export default SelectSize;