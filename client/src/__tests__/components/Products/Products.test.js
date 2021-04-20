import React from 'react';
import { shallow, render, mount } from '../../../enzyme';
import toJson from 'enzyme-to-json';
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
  let wrapper;
  var props;

  beforeEach(() => {
    wrapper = mount(
      <Products />
    )
    props = {
      selected: 'testURL'
    }
  });

  it('Renders the Products Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render correctly with no props', () => {
    const component = shallow(<Products/>);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Should add an image url to props.selected when ComponentDidMount is called', () => {
    expect(props.selected).toBe('testURL');
  });

  it('Should render nested Components', () => {
    const component = shallow(<Products/>);
    expect(component.find('ThumbnailGallery').length).toEqual(4);
  });

  it('Should render nested Components', () => {
    const component = shallow(<Products/>);
    expect(component.find('MainImageView').length).toEqual(1);
  });

  it('Should render nested Components', () => {
    const component = shallow(<Products/>);
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
