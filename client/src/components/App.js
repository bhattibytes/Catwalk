import React from 'react';
import Products from './Products/Products.js';
import Related from './Related/Related.js';
import Reviews from './Reviews/Reviews.js';
import Navbarheader from './Navbarheader.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div>
        <Navbarheader fixed="top" />
        <Products />
        <Related />
        <Reviews />
      </div>
    );
  }
};

export default App;