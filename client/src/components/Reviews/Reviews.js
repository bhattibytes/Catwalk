import React from 'react';
import { connect } from 'react-redux';
import { getReviews, getMetaData } from '../../actions/reviews.js';
// import { tracker } from '../../actions/tracker.js';
import ReviewList from './ReviewList.js';
import Ratings from './Ratings/Ratings.js';
import Star from '../Star/Star.js';
import Modal from './Modal/Modal.js';
import FormModal from './Form/FormModal.js';
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
    const { reviews, product, dispatch } = this.props;
    const { isLoading, isModalOn, isFormModalOn, hasMoreReviews, starFilters, meta, widget } = reviews;
    const reviewsData = (starFilters.length > 0) ? reviews.ratingsFilter : reviews.data;
    return (
      <div className='review-parent-container' >
        <hr />
        {(reviews.isLoading) ? '' :
          <div>
            <h2>Reviews</h2>
            <div className='review-container'>
              <Ratings meta={meta} starFilters={starFilters} dispatch={dispatch} />
              <ReviewList reviews={reviewsData} dispatch={dispatch} hasMoreReviews={hasMoreReviews} />
            </div>
          </div>
        }
        {/* Modal for thumbnail images */}
        {(isModalOn.value) ?
          <Modal image={isModalOn.image} dispatch={dispatch} /> : ''
        }
        {/* Modal for adding a review form */}
        {(isFormModalOn) ?
          <FormModal dispatch={dispatch} meta={meta} product={product} /> : ''
        }
      </div>
    );
  }
};

/**
 * Map state to props for Reviews component
 */
const mapStateToProps = (state) => ({
  product: state.product,
  reviews: state.reviews
});

export default connect(mapStateToProps)(Reviews);