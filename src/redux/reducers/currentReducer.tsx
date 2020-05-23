// import _ from 'lodash';

// REDUCER
const initial = {
  year2020:{}
}

interface ActionDetails {
  type:string
}

const currentReducer = ( state = initial, action:ActionDetails) => {
  switch(action.type) {
    case 'SYNC_REDUX_FIREBASE_CALENDARS':
      return state;

    default:
      return state;
  }
}

export default currentReducer;