import React from 'react';
import ReviewListItem from './ReviewListItem.js';
import { sortOrder, moreReviews, getReviews, addReview } from '../../actions/reviews.js';

const ReviewList = ({ reviews, dispatch, hasMoreReviews }) => {
  return (
    <div>
      <div>
        <select onChange={(e) => dispatch(sortOrder(e.target.value))}>
          <option>relevant</option>
          <option>newest</option>
          <option>helpful</option>
        </select>
      </div>
      <div className='review-items-container'>
        {reviews.map((review, idx) =>
          <ReviewListItem key={idx} review={review} dispatch={dispatch} />
        )}
      </div>
      {/* Action items for Reviews */}
      <div className='action-items'>
        <div className='action-buttons'>
          {(hasMoreReviews) ?
            <div
              onClick={(e) => dispatch(getReviews())}
              className='button'>MORE REVIEWS</div>
            :
            ""
          }
          <div
            onClick={() => dispatch(addReview())}
            className='button'>ADD A REVIEW +</div>
        </div>
        <div></div>
      </div>
    </div>
  )
};

export default ReviewList;