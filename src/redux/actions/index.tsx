// import _ from 'lodash';

export const setCurrentMonth = (month:number) => {
  console.log('made it here');
  return { type: 'SET_CURRENT_MONTH', month: month} ;
}

export const setCurrentDay = (day:number) => {
  return { type: 'SET_CURRENT_DAY', day: day};
}

export const plus = () =>{
  return {type: 'ADD'}
}