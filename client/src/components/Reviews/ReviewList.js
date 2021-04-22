import React from 'react';
import ReviewListItem from './ReviewListItem.js';
import { sortOrder } from '../../actions/reviews.js';

const ReviewList = ({ reviews, dispatch }) => {
  return (
    <div>
      <div>
        <select onChange={(e) => dispatch(sortOrder(e.target.value))}>
          <option>newest</option>
          <option>helpful</option>
          <option>relevant</option>
        </select>
      </div>
      <div>
      {reviews.map((review, idx) =>
        <ReviewListItem key={idx} review={review} />
      )}
      </div>
    </div>
  )
};

export default ReviewList;