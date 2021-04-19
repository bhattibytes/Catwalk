import React from 'react';
import { shallow, render } from '../../enzyme.js';
import App from '../../components/App.js';
import store from '../../store.js';

describe('App Component', () => {
  test('Renders App Component', () => {
    const wrapper = shallow(
      <App store={store} />
    );
    expect(wrapper.exists()).toBe(true);
  });
});