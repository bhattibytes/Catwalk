import React from 'react';
import ThumbnailGallery from './ThumbnailGallery.js';
import MainImageView from './MainImageView.js';
import ProductInfo from './ProductInfo.js';



class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      thumbNailImages: ['https://cdn.shopify.com/s/files/1/0015/6611/3861/products/13c3447174e077f86b8c140ea9d174f1_180x.jpg', 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/a56f2d740fc6595b186b085167b9496e_180x.jpg', 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/3eb4ef35474562e5a3eef2dabde35284_180x.jpg', 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/132e7bcbb9e4e7ef7241213f588af9a5_180x.jpg'],
      fullSizeImage: ['https://cdn.shopify.com/s/files/1/0015/6611/3861/products/13c3447174e077f86b8c140ea9d174f1_2400x.jpg', 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/a56f2d740fc6595b186b085167b9496e_2400x.jpg', 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/3eb4ef35474562e5a3eef2dabde35284_2400x.jpg', 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/132e7bcbb9e4e7ef7241213f588af9a5_2400x.jpg'],
      selected: null
    };
    this.show = this.show.bind(this);
    this.fowardButton = this.fowardButton.bind(this);
    this.backButton = this.backButton.bind(this);
  }

  show(e) {
    var thumb = this.state.thumbNailImages
    for (var i = 0; i < thumb.length; i++) {
      if (thumb[i] === e.currentTarget.src) {
        this.setState({
          selected: this.state.fullSizeImage[i]
        })
      }
    }
  }

  fowardButton(e) {
    e.preventDefault();
    var fullImg = this.state.fullSizeImage;
    var current = this.state.selected;
    if (current === fullImg[fullImg.length - 1]) {
      this.setState({
        selected: fullImg[0]
      });
      return;
    }
    for (var i = 0; i < fullImg.length; i++) {
      if (fullImg[i] === current) {
        this.setState({
          selected: fullImg[i+1]
        });
      }
    }
  }

  backButton(e) {
    e.preventDefault();
    var images = this.state.thumbNailImages;
    var fullImg = this.state.fullSizeImage;
    var current = this.state.selected;
    if (current === fullImg[0]) {
      this.setState({
        selected: fullImg[fullImg.length - 1]
      });
      return;
    }
    for (var i = 0; i < fullImg.length; i++) {
      if (fullImg[i] === current) {
        this.setState({
          selected: fullImg[i-1]
        });
      }
    }
  }

  componentDidMount () {
    this.setState({
      selected: this.state.fullSizeImage[0]
    })
  }

  render() {
    return(
      <div className="container" style={{border: "solid"}}>
        <div className="thumbnail-slider">
          <div className="viewport">
            {
              this.state.thumbNailImages.map(image => {
                var imgid = image.split('/')[10];
                return  <ThumbnailGallery image={image} key={imgid} click={this.show}/>
              })
            }
          </div>
        </div>
        <div className="main-image-container">
          <MainImageView forward={this.fowardButton} back={this.backButton} select={this.state.selected}/>
        </div>
        <div className="product-info-right">
          <ProductInfo />
        </div>
      </div>
    );
  }
};

export default Products;



// ['https://images.pexels.com/photos/4354221/pexels-photo-4354221.jpeg', 'https://images.pexels.com/photos/3310694/pexels-photo-3310694.jpeg', 'https://images.pexels.com/photos/2587392/pexels-photo-2587392.jpeg', 'https://images.pexels.com/photos/4614845/pexels-photo-4614845.jpeg']