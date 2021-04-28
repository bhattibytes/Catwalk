import React from 'react';
import Star from '../../Star/Star.js';
import Characteristics from './Characteristics/Characteristics.js';
import { findAverageStars, findAverageRecommend, createRatingBar, createCharacteristics } from './utils';
import './ratings.css';

const Ratings = ({ meta }) => {
  const averageAmountStars = findAverageStars(meta.ratings);
  const averageRecommendations = findAverageRecommend(meta.recommended);
  const ratingBars = createRatingBar(meta.ratings);
  const characteristics = createCharacteristics(meta.characteristics)

  return (
    <div>
      <h3>Ratings & Reviews</h3>
      {/* Average rating  */}
      <div className='average-star-rating'>
        <h2 className='average-rating'>{averageAmountStars.toFixed(1)}</h2>
        <Star rating={averageAmountStars} />
      </div>
      {/* Average Meta Data  */}
      <div>
        <p><b>{(averageRecommendations * 100).toFixed(0)}% </b>of reviews recommend this product</p>
        {/* Average bar graph  */}
        <div>
          {ratingBars.map((obj, idx) =>
            <div className='bar-container' key={idx}>
              <p>{obj.rating} stars</p> <div className='bar' style={obj.style}></div>
            </div>
          )}
        </div>
        <div>
          {/* Average characteristics review  */}
          {characteristics.map((characteristic, idx) =>
            <Characteristics key={idx} characteristic={characteristic} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Ratings;