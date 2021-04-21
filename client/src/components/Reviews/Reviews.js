import React from 'react';
import { connect } from 'react-redux';
import { getReviews, getMetaData } from '../../actions/reviews.js';
import ReviewList from './ReviewList.js';
import Ratings from './Ratings/Ratings.js';
import Star from '../Star/Star.js';


class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // Get reviews from dummy data
    dispatch(getReviews());
    // Get meta data from dummy data
    dispatch(getMetaData());
  }


  render() {
    const { reviews, dispatch } = this.props;
    const style = {
      display: 'grid',
      gridTemplateColumns: '1fr 4fr'
    }
    return (
      <div>
        <hr />
        {(reviews.isLoading) ? '' :
          <div>
            <h2>Reviews</h2>
            <div style={style}>
              <Ratings meta={reviews.meta} />
              <ReviewList reviews={reviews.data} dispatch={dispatch} />
            </div>
          </div>
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