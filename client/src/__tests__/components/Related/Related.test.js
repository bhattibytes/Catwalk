import React from 'react';
import { shallow, render, mount } from '../../../enzyme.js';
import Related from '../../../components/Related/Related.js';
import RelatedProductCards from '../../../components/Related/RelatedProductCards.js';
import ProductCard from '../../../components/Related/ProductCard.js';
import ProductInfo from '../../../components/Related/ProductInfo.js';
import Star from '../../../components/Star/Star.js';
import dummyData from '../../../components/Related/dummyData.js';

describe('Related Component', () => {
  const component = shallow(<Related />);
  let wrapper;
  var props;

  beforeEach(() => {
    wrapper = mount(
      <Related />
    )
    props = {
      selected: 'testURL'
    }
  });

  it('Renders the Related Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // it('Should render correctly with no props', () => {
  //   expect(component).toMatchSnapshot();
  // });

  // it('Should add an image url to props.selected when ComponentDidMount is called', () => {
  //   expect(props.selected).toBe('testURL');
  // });

  // it('Should render nested Components', () => {
  //   // how many thumbs are rendered = 4 with hardcoded data
  //   expect(component.find('ThumbnailGallery').length).toEqual(4);
  // });

  // it('Should render nested Components', () => {
  //   expect(component.find('MainImageView').length).toEqual(1);
  // });

  // it('Should render nested Components', () => {
  //   expect(component.find('ProductInfo').length).toEqual(1);
  // });
});