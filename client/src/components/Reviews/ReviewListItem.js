import React from 'react';
import Star from '../Star/Star.js';

const ReviewListItem = ({ review }) => {
  return (
    <div className='review'>
      <div>
        {review.reviewer_name}, {review.date}
      </div>
      <Star rating={review.rating} />
      <h4>{review.body.slice(0, 100)}...</h4>
      <p>{review.summary}</p>
      <p>{(review.recommend) ? 'check' : 'no-check'} <i>I recommend this product</i></p>
      <p><b>Response: </b>{review.response}</p>
      <div>
        <p>Helpful? <b>Yes</b>({review.helpfulness}) | <b>Report</b></p>
      </div>
      <hr />
    </div>
  )
};

export default ReviewListItem;