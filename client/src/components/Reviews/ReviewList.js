import React from 'react';
import ReviewListItem from './ReviewListItem.js';
import { sortOrder, moreReviews, getReviews, toggleFormModal } from '../../actions/reviews.js';

const ReviewList = ({ reviews, dispatch, hasMoreReviews }) => {
  return (
    <div>
      <div>
        <b>sorted by</b>
        {/* Sort filter */}
        <select onChange={(e) => dispatch(sortOrder(e.target.value))} className='select-sort '>
          <option>relevant</option>
          <option>newest</option>
          <option>helpful</option>
        </select>
      </div>
      {/* Reviews container */}
      <div className='review-items-container'>
        {reviews.map((review, idx) =>
          <ReviewListItem key={idx} review={review} dispatch={dispatch} />
        )}
      </div>
      {/* Action items for Reviews */}
      <div className='action-items'>
        {/* MORE REVIEWS Button */}
        <div className='action-buttons'>
          {(hasMoreReviews) ?
            <div
              name='moreReviews'
              onClick={(e) => dispatch(getReviews())}
              className='button'>MORE REVIEWS</div> : ""
          }
          {/* ADD A REVIEW Button */}
          <div
            name='addReview'
            onClick={() => dispatch(toggleFormModal())}
            className='button'>ADD A REVIEW +</div>
        </div>
        <div></div>
      </div>
    </div>
  )
};

export default ReviewList;