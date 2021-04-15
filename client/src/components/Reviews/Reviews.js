import React from 'react';
import { connect } from 'react-redux';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
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