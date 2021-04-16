import React from 'react';
import './star.css';
const Star = ({ rating = 3 }) => {
  const uniCodeEmptyStar = '&#9734;';
  const uniCodeFullStar = '9733';
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(uniCodeFullStar);
  }
  return (
    <div>
      {stars.map((uniCodeStar, idx) =>
        <span key={idx}>{String.fromCodePoint(uniCodeStar)}</span>
      )}
    </div>
  );
};

export default Star;