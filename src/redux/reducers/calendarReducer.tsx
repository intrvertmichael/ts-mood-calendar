// import _ from 'lodash';
import {mergeDeep} from 'immutable';

// REDUCER
const initial = {
  counter:0,
  year2020:{
    month0:{ num:0, name:'January', length:31, starts:3, days:{day1:{mood:1}, day2:{mood:2}, day3:{mood:3}, day4:{mood:4}}},
    month1:{ num:1,  name:'February',  length:28, starts:6, days:{} },
    month2:{ num:2, name:'March', length:31, starts:0, days:{day11:{mood:1}, day12:{mood:2}, day13:{mood:3}, day14:{mood:4}}}
  }
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
      // console.log(state.counter);
      return state;

      case 'MINUS':
        state.counter--;
        // console.log(state.counter);
        return state;

        case 'CAL':
          const newM = { num:2, name:'March', length:31, starts:0, days:{day11:{mood:1}, day12:{mood:2}, day13:{mood:3}, day14:{mood:4}}};
          return mergeDeep(state, { year2020: { month5:newM }});
    default:
      return state;
  }
}

export default calendarReducer;