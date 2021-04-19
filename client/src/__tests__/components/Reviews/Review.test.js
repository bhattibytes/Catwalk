import React from 'react';
import { shallow, render, mount } from '../../../enzyme.js';
import Review from '../../../components/Reviews/Reviews.js';
import ReviewList from '../../../components/Reviews/ReviewList.js';
import ReviewListItem from '../../../components/Reviews/ReviewListItem.js';
import store from '../../../store.js';
import { reviewsData } from '../../../dummy_data/reviews.js';

describe('Review Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Review store={store} reviews={[...reviewsData.results,{name:'sssd'}]} />
    );
  });
  /* Check if the Review Component renders */
  it('Renders Review component', () => {
    expect(wrapper.exists()).toBe(true);
  });
  /* Check if the ReviewList is being rendered */
  it('Renders ReviewList component', () => {
    expect(wrapper.find(ReviewList).length).toBe(1);
  });
  /* Check if the ReviewListItem is being rendered based off of dummy data */
  it('Renders ReviewListItem components', () => {
    const reviewsLength = reviewsData.results.length
    expect(wrapper.find(ReviewListItem).length).toBe(reviewsLength);
  });
});