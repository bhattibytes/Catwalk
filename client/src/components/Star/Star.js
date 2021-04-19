import React from 'react';
import './star.css';

const getDecimal = n => (n - Math.floor(n));

const createStyleOb = (n) => {

  let style = {
    background: `linear-gradient(to right, orange ${n}%, transparent 0%)`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `#cddc3900`,
    position: 'absolute'
  }
  return style;
}


/**
 * @param {number} rating
 * Star component expects a number as a prop to dynamically
 * render the amount of stars
 */
const Star = ({ rating }) => {
  const maxStars = 5;
  // Get the whole number of rating
  const wholeNumber = Math.floor(rating);
  // Get decimal value
  const decimalValue = getDecimal(rating);
  // Difference btwn max and rating star
  const diffOfStars = maxStars - rating;
  // Get unicodes for filled & empty stars
  const uniCodeEmptyStar = '9734';
  const uniCodeFullStar = '9733';
  // Initiate arrays for the amount to render
  const filledStars = [];
  const emptyStars = [];
  const style = createStyleOb(decimalValue * 100);
  /**
   * Render star based off of percentage. Create a style obj for it
   * to color in the amount of percentage.
   */

  // Populate filled filledStars upon rating
  for (let i = 0; i < wholeNumber; i++) {
    filledStars.push(uniCodeFullStar);
  }
  // Populate the remaining stars with empty ones based off of the difference
  for (let i = 0;  i < diffOfStars; i++) {
    emptyStars.push(uniCodeEmptyStar);
  }
  return (
    <div>
      {/* Convert the string into unicode character star */}
      {filledStars.map((uniCodeStar, idx) =>
        <span className='star' key={idx}>{String.fromCodePoint(uniCodeStar)}</span>
      )}
      {/* Check to see if ratong has a decimal value. If so, render star based off percentage */}
      { (decimalValue !== 0) ?
        <div className='percentage-star-container'>
          <span style={style} className='star'>{String.fromCodePoint(uniCodeFullStar)}</span>
          <span className='star remove-space'>{String.fromCodePoint(uniCodeEmptyStar)}</span>
        </div>
         : ''
      }

      {/* Convert the string into unicode character for empty star */}
      {(emptyStars.length > 0) ? emptyStars.map((uniCodeEmptyStar, idx) =>
        <span className='star' key={idx}>{String.fromCodePoint(uniCodeEmptyStar)}</span>      )  : ''
      }
    </div>
  );
};

export default Star;