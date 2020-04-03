/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux'


import Routes from './Routes'
import reducers from './reducers'


const App =  () => {
  return (
    <Provider store={createStore(reducers)}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </Provider>
  );
};


export default App;
