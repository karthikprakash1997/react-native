import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore';
import Main from './src/screens/Main';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

