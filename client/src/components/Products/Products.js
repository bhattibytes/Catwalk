import React from 'react';
import Gallery from './Gallery.js';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      images: ['https://images.pexels.com/photos/4354221/pexels-photo-4354221.jpeg', 'https://images.pexels.com/photos/3310694/pexels-photo-3310694.jpeg', 'https://images.pexels.com/photos/2587392/pexels-photo-2587392.jpeg', 'https://images.pexels.com/photos/4614845/pexels-photo-4614845.jpeg'],
      selected: null
    };
    this.show = this.show.bind(this);
  }

  show(e) {
    this.setState({
      selected: e.currentTarget.src
    })
  }

  render() {
    return(
      <div className="container">
          {
            this.state.images.map(image => {
              var imgid = image.split('/')[4];
              return  <Gallery image={image} key={imgid} click={this.show}/>
            })
          }
        <img className="select" src={this.state.selected} width="200" height="300" border="2px"/>
      </div>
    );
  }
};

export default Products;