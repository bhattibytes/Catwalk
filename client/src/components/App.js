import React from 'react';
import Products from './Products/Products.js';
import Related from './Related/Related.js';
import Reviews from './Reviews/Reviews.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div>
        <nav>
          <h1>Catwalk</h1>
          <input type = "search" />
        </nav>
        <Products />
        <Related />
        <Reviews />
      </div>
    );
  }
};

export default App;