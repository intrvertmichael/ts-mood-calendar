import { combineReducers } from 'redux';

// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';

// import calendarReducer from './calendarReducer';
import calendarReducer from './calendarReducer';
import currentReducer from './currentReducer';

export default combineReducers({
  calendar: calendarReducer,
  current: currentReducer

  // firestore: firestoreReducer,
  // firebase: firebaseReducer
});