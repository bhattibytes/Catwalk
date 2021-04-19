import React from 'react';
import { shallow, render } from '../../../enzyme.js';
import Review from '../../../components/Reviews/Reviews.js';
import store from '../../../store.js';
import { Provider } from 'react-redux';
import dummy_data from '../../../dummy_data/reviews.js';

describe('Review Component', () => {
  test('Renders Review Component', () => {
    const wrapper = shallow(
      <Review store={store} />
    );
    expect(wrapper.exists()).toBe(true);
  });
});