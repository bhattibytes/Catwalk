import React from 'react';
import { connect } from 'react-redux';
import { getReviews, getMetaData, sortOrder } from '../../actions/reviews.js';
import { reviewsData } from '../../dummy_data/reviews.js';
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
    const { reviews, meta_data, dispatch } = this.props;
    const style = {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr'
    }
    return (
      <div>
        <hr />
        <h2>Reviews</h2>
        <Star rating={3.5} />
        <select onChange={(e) => dispatch(sortOrder(e.target.value))}>
          <option>newest</option>
          <option>helpful</option>
          <option>relevance</option>
        </select>
        <div style={style}>
          <Ratings />
          <ReviewList reviews={reviews.data} />
        </div>
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