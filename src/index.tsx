import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import {store, firebaseConfig} from './redux';

import firebase from 'firebase/app';
import {createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';


// REACT REDUX FIREBASE OPTIONS
const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
