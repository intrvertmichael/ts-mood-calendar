
import {mergeDeep} from 'immutable';
import {CalendarReducerDetails} from '../../components/_calendar_types';

const initialState = {
  year2020:{
    month0:{ num:0, name:'January', length:31, starts:3, days:{day1:{mood:1}, day2:{mood:2}, day3:{mood:3}, day4:{mood:4}}},
    month1:{ num:1, name:'February', length:28, starts:6, days:{} },
    month2:{ num:2, name:'March', length:31, starts:0, days:{
      day11:{mood:1}, day12:{mood:2}, day13:{mood:3}, day14:{mood:4}
    }}
  }
}

const calendarReducer = (state = initialState, action:CalendarReducerDetails) => {
  switch(action.type) {
    case 'CREATE_MONTH':
      return mergeDeep(state, { year2020: { [action.monthName]: action.month }});

    case 'CREATE_DAY':
      return mergeDeep(state, { year2020: { [action.monthName]: { days: action.day }}});

    case 'CREATE_MOOD':
      return mergeDeep( state, { year2020: { [action.monthName]: { days: { [action.dayName]: { mood: action.mood }}}}} );

    case 'CREATE_MESSAGE':
      return mergeDeep( state, { year2020: { [action.monthName]: { days: { [action.dayName]: { message: action.message }}}}} );

    default:
      return state;
  }
}

export default calendarReducer;