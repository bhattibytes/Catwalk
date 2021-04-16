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
    this.fowardButton = this.fowardButton.bind(this);
    this.backButton = this.backButton.bind(this);
  }

  show(e) {
    this.setState({
      selected: e.currentTarget.src
    })
  }

  fowardButton(e) {
    e.preventDefault();
    var images = this.state.images
    var current = this.state.selected
    if (current === images[images.length - 1]) {
      this.setState({
        selected: images[0]
      });
      return;
    }
    for (var i = 0; i < images.length; i++) {
      if (images[i] === current) {
        this.setState({
          selected: images[i+1]
        });
      }
    }
  }

  backButton(e) {
    e.preventDefault();
    var images = this.state.images
    var current = this.state.selected
    if (current === images[0]) {
      this.setState({
        selected: images[images.length - 1]
      });
      return;
    }
    for (var i = 0; i < images.length; i++) {
      if (images[i] === current) {
        this.setState({
          selected: images[i-1]
        });
      }
    }
  }

  render() {
    return(
      <div className="container" style={{border: "solid"}}>
          {
            this.state.images.map(image => {
              var imgid = image.split('/')[4];
              return  <Gallery image={image} key={imgid} click={this.show}/>
            })
          }
        <button className="back" onClick={this.backButton}><img src="https://snappygoat.com/b/e47653d751e21b834639d2be360b920104e04584" width="20px" height="20px"/></button>
        <img className="select" src={this.state.selected} width="200" height="300" border="2px"/>
        <button className="forward" onClick={this.fowardButton}><img src="https://snappygoat.com/b/0d7b5b00409f0b09fd19713d91dad1faeecdbff3" width="20px" height="20px"/></button>

      </div>
    );
  }
};

export default Products;