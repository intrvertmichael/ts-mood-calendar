import { combineReducers } from 'redux';

// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';

// import calendarReducer from './calendarReducer';
import calendarReducer from './calendarReducer';

export default combineReducers({
  current: calendarReducer,

  // firestore: firestoreReducer,
  // firebase: firebaseReducer
});