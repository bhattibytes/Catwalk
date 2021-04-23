import React from 'react';
import { connect } from 'react-redux';
import { getReviews, getMetaData } from '../../actions/reviews.js';
import ReviewList from './ReviewList.js';
import Ratings from './Ratings/Ratings.js';
import Star from '../Star/Star.js';
import Modal from './Modal/Modal.js';
import './reviews.css';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // Get reviews from Atlier api (page 1)
    dispatch(getReviews());
    // Get meta data from Atlier api
    dispatch(getMetaData());
  }


  render() {
    const { reviews, dispatch } = this.props;
    const { isLoading, isModalOn, hasMoreReviews, meta } = reviews;
    return (
      <div className='review-parent-container'>
        <hr />
        {(reviews.isLoading) ? '' :
          <div>
            <h2>Reviews</h2>
            <div className='review-container'>
              <Ratings meta={meta} />
              <ReviewList reviews={reviews.data} dispatch={dispatch} hasMoreReviews={hasMoreReviews} />
            </div>
          </div>
        }
        {(isModalOn.value) ?
          <Modal image={isModalOn.image} dispatch={dispatch} />
          :
          ''
        }
      </div>
    );
  }
};

/**
 * Map state to props for Reviews component
 */
const mapStateToProps = (state) => ({
  reviews: state.reviews
});

export default connect(mapStateToProps)(Reviews);