import React from 'react';
import Products from './Products/Products.js';
import Related from './Related/Related.js';
import Reviews from './Reviews/Reviews.js';
import Navbarheader from './Navbarheader.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch (e) {
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
    return(
      <div>
        <Navbarheader fixed="top" search={this.state.search} handleSearch={this.handleSearch} change={this.handleChange}/>
        <Products />
        <Related />
        <Reviews />
      </div>
    );
  }
};

export default App;