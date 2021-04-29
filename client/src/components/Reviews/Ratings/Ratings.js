import React from 'react';
import Star from '../../Star/Star.js';
import Characteristics from './Characteristics/Characteristics.js';
import { findAverageStars, findAverageRecommend, createRatingBar, createCharacteristics } from './utils';
import { filterStarsByRatings } from '../../../actions/reviews.js';
import './ratings.css';

const Ratings = ({ meta, starFilters, dispatch }) => {
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
              <p
                className={(starFilters.includes(obj.rating))? 'selected-rating-filter' : 'rating-filter'}
                onClick={() => dispatch(filterStarsByRatings(obj.rating))}>
                {obj.rating} Stars
              </p>
              <div className='bar' style={obj.style}></div>
              <p><b>{meta.ratings[obj.rating]}</b></p>
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