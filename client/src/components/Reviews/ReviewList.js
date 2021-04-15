import React from 'react';
import ReviewListItem from './ReviewListItem.js';

const ReviewList = ({reviews}) => {
  return(
    <div>
      {reviews.map((review, idx)=>
        <ReviewListItem key={idx} review={review} />
      )}
    </div>
  )
};

export default ReviewList;