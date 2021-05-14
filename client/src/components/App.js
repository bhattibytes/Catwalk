import React from 'react';
import { connect } from 'react-redux';
import Products from './Products/Products.js';
import Related from './Related/Related.js';
import Reviews from './Reviews/Reviews.js';
import Navbarheader from './Navbarheader.js';
import { getProduct } from '../actions/product.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProduct());
  }

  handleSearch(e) {
    e.preventDefault();
    this.setState({
      search: ''
    });
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    const { product, isLoading } = this.props;
    return (
      <div>
        <Navbarheader fixed="top" search={this.state.search} handleSearch={this.handleSearch} change={this.handleChange} />
        { (isLoading) ? '' :
        <div>
          <Products />
          <Related />
          {/* <Reviews /> */}
        </div>
        }
      </div>
    );
  }
};

/**
 * Map state to props for App component
 */
const mapStateToProps = (state) => ({
  isLoading: state.product.isLoading,
});

export default connect(mapStateToProps)(App);