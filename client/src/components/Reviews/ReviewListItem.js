import React from 'react';
import Star from '../Star/Star.js';
import moment from 'moment';

const ReviewListItem = ({ review }) => {
  const photos = review.photos;
  return (
    <div className='review'>
      <div className='review-star-date'>
        <Star rating={review.rating} />
        <div>
          {review.reviewer_name}, {moment(review.date).format('MMMM DD, YYYY')}
        </div>
      </div>
      <h4>{review.body.slice(0, 60)}...</h4>
      <p>{review.summary}</p>
      {(review.recommend) ?
        <div>
          <span className='checkmark'>&#10003;</span>
          <i>I recommend this product</i>
        </div>
        : ''}
      <p><b>Response: </b>{review.response}</p>
      {(photos.length > 0) ?
        <div className='thumbnails'>
          {photos.map((obj, idx) =>
            <img key={idx} src={obj.url} className='thumbnail' />
          )}
        </div>
        :
        ""
      }
      <div></div>
      <div>
        <p>Helpful? <b>Yes</b>({review.helpfulness}) | <b>Report</b></p>
      </div>
      <hr />
    </div>
  )
};

export default ReviewListItem;