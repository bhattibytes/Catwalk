import React from 'react';
import { shallow, render, mount } from '../../../enzyme';
import Products from '../../../components/Products/Products.js';
import ThumbnailGallery from '../../../components/Products/ThumbnailGallery.js';
import { productStyles } from '../../../dummy_data/productStyles.js';
import MainImageView from '../../../components/Products/MainImageView.js';
import ProductInfo from '../../../components/Products/ProductInfo.js';
import ProductTitle from '../../../components/Products/ProductTitle.js';
import SelectStyle from '../../../components/Products/SelectStyle.js';
import CircleImageGallery from '../../../components/Products/CircleImageGallery.js';
import SelectSize from '../../../components/Products/SelectSize.js';
import AddToBag from '../../../components/Products/AddToBag.js';
import Favorite from '../../../components/Products/Favorite.js';
import SelectQuantity from '../../../components/Products/SelectQuantity.js';
import Star from '../../../components/Star/Star.js';

describe('Products Component', () => {
  const component = shallow(<Products />);
  let wrapper;
  var props;

  // afterEach(cleanup) if using the react testing library instead of enzyme
  // import {render, fireEvent, cleanup} from '@testing-library/react';

  beforeEach(() => {
    wrapper = mount(
      <Products />
    )
    props = {
      selected: 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/13c3447174e077f86b8c140ea9d174f1_180x.jpg'
    }
  });

  it('Renders the Products Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render correctly with no props', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should add an image url to props.selected when ComponentDidMount is called', () => {
    expect(typeof props.selected === 'string').toBe(true);
  });

  it('Should expect the selected prop to be a URL', () => {
    expect(props.selected.includes('https://cdn.shopify.com')).toBe(true);
  });

  it('Should render nested Components', () => {
    // how many thumbs are rendered = 4 with hardcoded data
    expect(component.find('ThumbnailGallery').length).toEqual(4);
  });

  it('Should render nested Components', () => {
    expect(component.find('MainImageView').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    expect(component.find('ProductInfo').length).toEqual(1);
  });
});

describe('ThumbnailGallery', () => {
  let wrapper;
  var props;

  beforeEach(() => {
    wrapper = mount(
      <ThumbnailGallery />
    )
    props = {
      thumbNailImages: []
    }
  });

  it('Renders the ThumbnailGallery Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should expect the thumbNailImages prop to be an Array', () => {
    expect(Array.isArray(props.thumbNailImages)).toBe(true);
  });

  it('Renders ThumbnailGallery components', () => {
    const thumbNailImagesLength = productStyles[0].results.length
    // Change this test toBe(thumbNailImagesLength) when getting the data from dummy data
    expect(wrapper.find(ThumbnailGallery).length).toBe(1);
  });

  // Should be passing down the click function that shows right image and updates the selected state property
});


describe('MainImageView', () => {
  const clickFn = jest.fn();
  let wrapper;
  var props;

  beforeEach(() => {
    wrapper = mount(
      <MainImageView />
    )
    props = {
      selected: 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/13c3447174e077f86b8c140ea9d174f1_180x.jpg'
    }
  });

  it('Renders the MainImageView Component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  // should be accepting props from selected
  // should be passing down the forward and back click functions

  // should be able to simulate clicked functions behavior
  it('Should show next or previous fullsized image when clicked', () => {
    const component = shallow(<MainImageView forward={clickFn} back={clickFn}/>);

    component.find('button.back').simulate('click');
    expect(clickFn).toHaveBeenCalled();

    component.find('button.forward').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it('Should expect the selected prop to be a string', () => {
    expect(typeof props.selected === 'string').toBe(true);
  });

  it('Should expect the selected prop to be a URL', () => {
    expect(props.selected.includes('https://cdn.shopify.com')).toBe(true);
  });

});

describe('ProductInfo', () => {
  const component = shallow(<ProductInfo />);
  let wrapper;
  var props;

  beforeEach(() => {
    wrapper = mount(
      <ProductInfo {...props}/>
    )
    props = {
      images: []
    }
  });

  it('Renders the ProductInfo Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should expect the thumbNailImages prop to be an Array', () => {
    expect(Array.isArray(props.images)).toBe(true);
  });

  it('Should render nested Components', () => {
    expect(component.find('Star').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    expect(component.find('ProductTitle').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    expect(component.find('SelectStyle').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    // how many thumbs are rendered = 4 with hardcoded data
    if (props.images.length) {
      expect(wrapper.find('CircleImageGallery').length).toEqual(4);
    } else {
      expect(wrapper.find('CircleImageGallery').length).toEqual(0);
    }
  });

  it('Should render nested Components', () => {
    expect(component.find('SelectSize').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    expect(component.find('SelectQuantity').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    expect(component.find('AddToBag').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    expect(component.find('Favorite').length).toEqual(1);
  });

});

describe('CircleImageGallery', () => {
  const component = shallow(<CircleImageGallery />);
  const clickFn = jest.fn();
  let wrapper;
  var props;

  beforeEach(() => {
    wrapper = mount(
      <CircleImageGallery {...props}/>
    )
    props = {
      images: ['https://cdn.shopify.com/s/files/1/0015/6611/3861/products/13c3447174e077f86b8c140ea9d174f1_180x.jpg'],
      image: 'https://cdn.shopify.com/s/files/1/0015/6611/3861/products/13c3447174e077f86b8c140ea9d174f1_180x.jpg'
    }
  });

  it('Renders the CircleImageGallery Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should expect the images prop to be an Array', () => {
    expect(Array.isArray(props.images)).toBe(true);
  });

  it('Should expect the image prop to be a string', () => {
    expect(typeof props.image === 'string').toBe(true);
  });

  it('Should expect the image prop to be a URL', () => {
    expect(props.image.includes('https://cdn.shopify.com')).toBe(true);
  });

  it('Should show next or previous fullsized image when clicked', () => {
    const component2 = shallow(<CircleImageGallery show={clickFn} />);
    component2.find('img').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

});



{/* <Products />
  <ThumbnailGallery/>
  <MainImageView />
  <ProductInfo />
    <Star />
    <ProductTitle />
    <SelectStyle />
    <CircleImageGallery />
    <SelectSize />
    <AddToBag />
    <Favorite /> */}
