/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';

import { Provider } from 'react-redux';
import {configureStore} from './ReduxPersistConfig';
import Home from './Home';

import { PersistGate } from 'redux-persist/es/integration/react'

//const store = createStore(AllReducers);
const {persistor, store} = configureStore()

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <PersistGate persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}