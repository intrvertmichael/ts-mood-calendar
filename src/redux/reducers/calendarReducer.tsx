// import _ from 'lodash';

// REDUCER
const initial = {
  counter:0,
  year2020:{}
}

interface CalendarReducerDetails {
  type:string,
  year?:number,
  month?:number,
  day?:number,
  mood?:number,
  message?:string
}

const calendarReducer = (state = initial, action:CalendarReducerDetails) => {
  switch(action.type) {
    case 'ADD':
      state.counter++;
      console.log(state.counter);
      return state;

    case 'MINUS':
      state.counter--;
      console.log(state.counter);
      return state;

    case 'CAL':
      console.log(state);
      return {...state, michael:'works'};

    default:
      return state;
  }
}

export default calendarReducer;