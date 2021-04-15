import React from 'react';
import { connect } from 'react-redux';
import { getReviews } from '../../actions/reviews.js';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // Get reviews from dummy data
    dispatch(getReviews());
    console.log(this.props)
  }


  render() {
    return(
      <div>
        <h2>Reviews</h2>
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