import React from 'react';
/**
 * @param {object} size
 * This functional component takes in a size and renders the
 * average 'size' users recommend
 */
const Size = ({ size }) => (
  <div className='average-size'>
    <p>Size</p>
    <input
      type='range'
      min={1} max={1.9999999999999999}
      step='0.1'
      className={(1 <= size && size < 2) ? 'slider' : 'empty-slider'}
      value={size}
      disabled={true} />
    <input
      type='range'
      min={2} max={3.9999999999999999}
      step='0.1'
      className={(2 <= size && size < 4) ? 'slider' : 'empty-slider'}
      value={size}
      disabled={true} />
    <input
      type='range'
      min={4} max={5}
      step='0.1'
      className={(4 <= size && size <= 5) ? 'slider' : 'empty-slider'}
      value={size}
      disabled={true} />
    <div className='sizes'>
      <div>Too small</div>
      <div>Perfect</div>
      <div>Too large</div>
    </div>
  </div>
);

export default Size;