import React from 'react';
import './star.css';

/**
 * @param {number} rating
 * Star component expects a number as a prop to dynamically
 * render the amount of stars
 */
const Star = ({ rating = 3 }) => {
  const maxStars = 5;
  // Difference btwn max and rating star
  const diffOfStars = maxStars - rating;
  // Get unicodes for filled & empty stars
  const uniCodeEmptyStar = '9734';
  const uniCodeFullStar = '9733';
  // Initiate arrays for the amount to render
  const filledStars = [];
  const emptyStars = [];

  // Populate filled filledStars upon rating
  for (let i = 0; i < rating; i++) {
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
        <span key={idx}>{String.fromCodePoint(uniCodeStar)}</span>
      )}
      {/* Convert the string into unicode character for empty star */}
      {(emptyStars.length > 0) ? emptyStars.map((uniCodeEmptyStar, idx) =>
        <span key={idx}>{String.fromCodePoint(uniCodeEmptyStar)}</span>      )  : ''
      }
    </div>
  );
};

export default Star;