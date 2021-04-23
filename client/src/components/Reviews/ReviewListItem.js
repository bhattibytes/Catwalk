import React from 'react';
import Star from '../Star/Star.js';
import { toggleModal } from '../../actions/reviews.js';
import moment from 'moment';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    }
  }

  render() {
    const { review, dispatch } = this.props;
    const { photos } = review;
    const { showMore } = this.state;

    return (
      <div className='review'>
        {/* Review Head */}
        <div className='review-star-date'>
          <Star rating={review.rating} />
          <div>
            {review.reviewer_name}, {moment(review.date).format('MMMM DD, YYYY')}
          </div>
        </div>
        {/* Review Body */}
        <b className='summary'>{review.summary.slice(0, 60)}</b>
        <div>{(!showMore && review.body.length > 250) ?
          <div>
            <p>{review.body.slice(0, 250) + '...'}</p>
            <a className='more-less' onClick={(e) => this.setState({ showMore: !showMore })}>Show More</a>
          </div>
          :
          <div>
            {/* Review's thumbnails (images) */}
            <p>{review.body}</p>
            {(photos.length > 0) ?
              <div className='review-thumbnails'>
                {photos.map((obj, idx) =>
                  <img
                    key={idx}
                    src={obj.url}
                    onClick={()=>dispatch(toggleModal(obj.url))}
                    className='thumbnail' />
                )}
              </div>
              :
              ""
            }
          </div>
        }
        </div>
        {/* Review's recommend */}
        {(review.recommend) ?
          <div>
            <span className='checkmark'>&#10003;</span>
            <i>I recommend this product</i>
          </div>
          : ''}
        {/* Review's response */}
        {(review.response) ? <div> Response: {review.response} </div> : ''}
        <div></div>
        {/* Review's helpful */}
        <div>
          <p>Helpful? <b>Yes</b>({review.helpfulness}) | <b>Report</b></p>
        </div>
        <hr />
      </div>
    )

  }
};

export default ReviewListItem;