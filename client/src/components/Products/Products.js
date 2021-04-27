import React from 'react';
import { connect } from 'react-redux';
import { getProducts, getStyles } from '../../actions/products.js';
import ThumbnailGallery from './ThumbnailGallery.js';
import MainImageView from './MainImageView.js';
import ProductInfo from './ProductInfo.js';
import ProductDescription from './ProductDescription.js';
import $ from 'jquery';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product: {
        name: '',
        default_price: 0,
        description: '',
        category: ''
      },
      qtyNSize: [{id: {quantity: 0, size: ''}}],
      thumbNailImages: [],
      fullSizeImage: [],
      selected: null,
      styles: [],
      styleImageArr: [{name: '', thumbNailImages: [], fullSizeImage: []}],
      maxQty: 1
    };
    this.show = this.show.bind(this);
    this.fowardButton = this.fowardButton.bind(this);
    this.backButton = this.backButton.bind(this);
    this.setBorder = this.setBorder.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.showFullScreen = this.showFullScreen.bind(this);
    this.onSelectEnter = this.onSelectEnter.bind(this);
    this.onSelectOut = this.onSelectOut.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  async componentDidMount () {
    const { dispatch } = this.props;
    // Get reviews from Atlier api
    await dispatch(getProducts());
    await dispatch(getStyles());

    var styleData = this.props.products.styles.results;
    var styleImageArr = []

    for (var i = 0; i < styleData.length; i++) {
      var thumbs = [];
      var full = [];

      var styleName = styleData[i].name;
      var allImages = styleData[i].photos;

      for (var k = 0; k < allImages.length; k++) {
        thumbs.push(allImages[k].thumbnail_url)
        full.push(allImages[k].url)
      }
      var currentStyle = { name: styleName, thumbNailImages: thumbs, fullSizeImage: full }
      styleImageArr.push(currentStyle)
    }
    var initialThumbs = styleImageArr[0].thumbNailImages;
    var initialFull = styleImageArr[0].fullSizeImage;

    this.setState({
      products: this.props.products,
      product: this.props.products.product,
      thumbNailImages: initialThumbs,
      fullSizeImage: initialFull,
      selected: initialFull[0],
      qtyNSize: this.props.products.styles.results[0].skus,
      styles: this.props.products.styles,
      styleImageArr: styleImageArr,
      maxQty: this.props.products.styles.results[0].skus.[522040].quantity
    })

    this.setBorder(initialThumbs[0]);
    $('img.slide-up').hide();

    this.render();
  }

  show(e) {
    $('img.thumb').removeClass('show-border');
    if ($(e.currentTarget).hasClass('thumb')) {
      $(e.currentTarget).addClass('show-border');
    }
    var thumb = this.state.thumbNailImages
    for (var i = 0; i < thumb.length; i++) {
      if (thumb[i] === e.currentTarget.src) {
        this.setState({
          selected: this.state.fullSizeImage[i]
        })
      }
    }
  }

  setBorder(thumURL) {
    $('img.thumb').each((i, elem) => {
      if ($(elem).attr('src') === thumURL){
        $(elem).addClass('show-border');
      }
    });
  }

  fowardButton(e) {
    e.preventDefault();
    $('img.thumb').removeClass('show-border');
    var images = this.state.thumbNailImages;
    var fullImg = this.state.fullSizeImage;
    var current = this.state.selected;
    if (current === fullImg[fullImg.length - 1]) {
      this.setState({
        selected: fullImg[0]
      });
      this.setBorder(images[0]);
      return;
    }
    for (var i = 0; i < fullImg.length; i++) {
      if (fullImg[i] === current) {
        this.setState({
          selected: fullImg[i+1]
        });
        this.setBorder(images[i+1]);
        return;
      }
    }
  }

  backButton(e) {
    e.preventDefault();
    $('img.thumb').removeClass('show-border');
    var images = this.state.thumbNailImages;
    var fullImg = this.state.fullSizeImage;
    var current = this.state.selected;
    if (current === fullImg[0]) {
      this.setState({
        selected: fullImg[fullImg.length - 1]
      });
      this.setBorder(images[images.length -1]);
      return;
    }
    for (var i = 0; i < fullImg.length; i++) {
      if (fullImg[i] === current) {
        this.setState({
          selected: fullImg[i-1]
        });
        this.setBorder(images[i-1]);
      }
    }
  }

  scrollUp (e) {
    e.preventDefault();
    $('img.slide-down').show();
    $('img.slide-up').hide();
    var viewportHeight = 0;

    $('.viewport').animate({
      scrollTop: viewportHeight,
    }, 2000);
  }

  scrollDown (e) {
    e.preventDefault();
    $('img.slide-down').hide();
    $('img.slide-up').show();
    var viewportHeight = $('.viewport').height();

    $('.viewport').animate({
      scrollTop: viewportHeight
    }, 2000);
  }

  showFullScreen (e) {
    e.preventDefault();
    if ($('.main-image-container').hasClass('main-view')) {
      $('.main-image-container').removeClass('main-view').addClass('fullScreen bodyFull');
      $('.selected-image-view').removeClass('select zoom').addClass('selectFull');
    } else {
      $('.main-image-container').removeClass('fullScreen bodyFull').addClass('main-view');
      $('.selected-image-view').removeClass('selectFull').addClass('select zoom');
    }
  }

  onSelectEnter (e) {
    $('button.forward').hide();
    $('button.back').hide();
  }

  onSelectOut () {
    $('button.forward').show();
    $('button.back').show();
  }

  selectStyle (e) {
    e.preventDefault();
    var selected = e.target.value;
    var styleArr = this.state.styleImageArr
    for (var i = 0; i < styleArr.length; i++) {
      if (styleArr[i].name === selected) {
        this.setState({
          thumbNailImages: styleArr[i].thumbNailImages,
          fullSizeImage: styleArr[i].fullSizeImage,
          selected: styleArr[i].fullSizeImage[0]
        })
      }
    }
    var qtySize = this.state.styles.results;
    for (var i = 0; i < qtySize.length; i++) {
      if (qtySize[i].name === selected) {
        this.setState({
          qtyNSize: qtySize[i].skus
        })
      }
    }
  }

  selectSize(e) {
    e.preventDefault();
    var selected = e.target.value;
    var currentQty = this.state.qtyNSize;
    for (var key in currentQty) {
      if (currentQty[key].size === selected) {
        this.setState({
          maxQty: currentQty[key].quantity
        })
      }
    }
  }

  render() {
    return(
      <div className="container">
        <div className="prodDes">
          <ProductDescription />
        </div>
        <img src={'https://cdn2.iconfinder.com/data/icons/video-player-interface/100/video_player-13-512.png'} width="40px" height="40px" className="full" onClick={this.showFullScreen}/>
        <button className="slide-up"><img src={'https://listimg.pinclipart.com/picdir/s/373-3739729_caret-png-clipart-swipe-up-icon-png-transparent.png'} width="20px" height="10px" className="slide-up" onClick={this.scrollUp}/></button>
        <div className="thumbnail-slider">
          <div className="viewport">
            {
              this.state.thumbNailImages.map((image, i) => {
                return  <ThumbnailGallery image={image} key={i} click={this.show}/>
              })
            }
          </div>
        </div>
        <button className="slide-down"><img src={'https://www.vhv.rs/file/max/10/100888_down-arrows-png.png'} width="20px" height="10px" className="slide-down" onClick={this.scrollDown}/></button>
        <MainImageView forward={this.fowardButton} back={this.backButton} select={this.state.selected} enter={this.onSelectEnter} out={this.onSelectOut}/>
        <div className="product-info-right" >
          <ProductInfo images={this.state.thumbNailImages} show={this.show} selectStyle={this.selectStyle} selectSize={this.selectSize} product={this.state.product} qty={this.state.qtyNSize} styles={this.state.styleImageArr} max={this.state.maxQty}/>
        </div>
      </div>
    );
  }
};


/**
 * Map state to props for Products component
 */
 const mapStateToProps = (state) => ({
  products: state.products
});

export default connect(mapStateToProps)(Products);