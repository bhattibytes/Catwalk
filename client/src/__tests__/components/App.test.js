import React from 'react';
import { shallow, render } from '../../enzyme.js';
import App from '../../components/App.js';
import store from '../../store.js';
import { Provider } from 'react-redux';

describe('App Component', () => {
  test('Renders App Component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });
});