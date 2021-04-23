import React from 'react';
/**
 * @param {object} size
 * This functional component takes in a size and renders the
 * average 'size' users recommend
 */
const Characteristics = ({ characteristic }) => {
  const { type, value, beginning, middle, end } = characteristic;
  return (
    <div className='average-characteristic'>
      <p>{type}</p>
      <input
        type='range'
        min={1} max={1.9999999999999999}
        step='0.1'
        className={(1 <= value && value < 2) ? 'slider' : 'empty-slider'}
        value={value}
        disabled={true} />
      <input
        type='range'
        min={2} max={3.9999999999999999}
        step='0.1'
        className={(2 <= value && value < 4) ? 'slider' : 'empty-slider'}
        value={value}
        disabled={true} />
      <input
        type='range'
        min={4} max={5}
        step='0.1'
        className={(4 <= value && value <= 5) ? 'slider' : 'empty-slider'}
        value={value}
        disabled={true} />
      <div className='characteristic'>
        <div>{beginning}</div>
        <div>{middle}</div>
        <div>{end}</div>
      </div>
    </div>
  );
};

export default Characteristics;