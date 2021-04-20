import React from 'react';
import { shallow, render, mount } from '../../../enzyme';
import Products from '../../../components/Products/Products.js';
import ProductInfo from '../../../components/Products/ProductInfo.js';

describe('Products Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Products />
    )
  });

  it('Renders the Products Component', () => {
    expect(wrapper.exists()).toBe(true);
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
