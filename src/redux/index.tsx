import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/';

import {getFirebase} from 'react-redux-firebase';
import {getFirestore, reduxFirestore} from 'redux-firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey:            "AIzaSyAL5D8qMwLeApe00CIkXjT8RTKetz1l8uM",
  authDomain:        "mood-calendar-91494.firebaseapp.com",
  databaseURL:       "https://mood-calendar-91494.firebaseio.com",
  projectId:         "mood-calendar-91494",
  storageBucket:     "mood-calendar-91494.appspot.com",
  messagingSenderId: "1040700958396",
  appId:             "1:1040700958396:web:4f2829334b1152a736d2b9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(firebase)
  )
);