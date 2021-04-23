import React from 'react';
import ReviewListItem from './ReviewListItem.js';
import { sortOrder, moreReviews, addReview } from '../../actions/reviews.js';

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
          <ReviewListItem key={idx} review={review} dispatch={dispatch} />
        )}
      </div>
      {/* Action items for Reviews */}
      <div className='action-items'>
        <div className='action-buttons'>
          <div
            onClick={(e) => dispatch(moreReviews())}
            className='button'>MORE REVIEWS</div>
          <div
            onClick={(e) => dispatch(addReview())}
            className='button'>ADD A REVIEW +</div>
        </div>
        <div></div>
      </div>
    </div>
  )
};

export default ReviewList;