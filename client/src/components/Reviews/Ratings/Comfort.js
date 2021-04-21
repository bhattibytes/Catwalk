import React from 'react';
/**
 * @param {object} comfort
 * This functional component takes in a size and renders the
 * average 'size' users recommend
 */
const Comfort = ({ comfort }) => (
  <div className='average-comfort'>
    <p>Comfort</p>
    <input
      type='range'
      min={1} max={1.25}
      step='0.1'
      className={(1 <= comfort && comfort < 1.26) ? 'slider-comfort' : 'empty-slider-comfort'}
      value={comfort}
      disabled={true} />
    <input
      type='range'
      min={1.26} max={2.5}
      step='0.1'
      className={(1.26 <= comfort && comfort < 2.5) ? 'slider-comfort' : 'empty-slider-comfort'}
      value={comfort}
      disabled={true} />
    <input
      type='range'
      min={2.6} max={3.78}
      step='0.1'
      className={(2.6 <= comfort && comfort < 3.78) ? 'slider-comfort' : 'empty-slider-comfort'}
      value={comfort}
      disabled={true} />
    <input
      type='range'
      min={3.79} max={5}
      step='0.1'
      className={(3.79 <= comfort && comfort <= 5) ? 'slider-comfort' : 'empty-slider-comfort'}
      value={comfort}
      disabled={true} />
    <div className='comfort'>
      <div className='left'>Poor</div>
      <div className='right'>Perfect</div>
    </div>
  </div>
);

export default Comfort;