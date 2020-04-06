/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'

import Routes from './Routes'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'


const App =  () => {
  //connect firebase

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyCT3ACSGQsnM0dd5b9Gq7Yy3504Nl8i08c",
      authDomain: "whatsapp-clone-9ded2.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-9ded2.firebaseio.com",
      projectId: "whatsapp-clone-9ded2",
      storageBucket: "whatsapp-clone-9ded2.appspot.com",
      messagingSenderId: "766543106603",
      appId: "1:766543106603:web:1c0b38b93b9f860b3dd06e",
      measurementId: "G-NVWZPXRZSP"
    };
    // Initialize Firebase

    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  }, [])


  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <Routes />
    </Provider>
  );
};


export default App;
