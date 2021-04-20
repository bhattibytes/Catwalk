import React from 'react';
import Star from '../../Star/Star.js';
import { findAverageStars, findAverageRecommend, createRatingBar } from './utils';
import './ratings.css';

const Ratings = ({ meta }) => {
  const averageAmountStars = findAverageStars(meta.ratings);
  const averageRecommendations = findAverageRecommend(meta.recommended);
  const ratingBars = createRatingBar(meta.ratings);
  return (
    <div>
      <h3>Ratings & Reviews</h3>
      <div>
        <h2>{averageAmountStars.toFixed(1)}</h2>
        <Star rating={averageAmountStars} />
      </div>
      <div>
        <p><b>{averageRecommendations * 100}% </b>of reviews recommend this product</p>
        <div>
           {ratingBars.map((obj, idx) =>
            <div className='bar-container' key={idx}>
              <b>{obj.rating} Stars</b> <div className='bar' style={obj.style}></div>
            </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default Ratings;