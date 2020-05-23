// import _ from 'lodash';

// REDUCER
const initial = {
  counter:0,
  year2020:{}
}

interface ActionDetails {
  type:string
}

const calendarReducer = ( state = initial, action:ActionDetails) => {
  switch(action.type) {
    case 'ADD':
      state.counter++
      return state;

    default:
      return state;
  }
}

export default calendarReducer;