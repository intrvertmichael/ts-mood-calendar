
import {MonthDetails} from './_calendar_types';

const setupCalendar = (): MonthDetails =>{

  // const todaysYear = new Date().getFullYear();
  const todaysMonth = new Date().getMonth();

  // enter firebase check here
  // if doesnt exist on firebase then set the defaults to the saved defaults

  const months2020:MonthDetails[] = [
    { num:0,  name:'January',   length:31, starts:3, days:{} } ,
    { num:1,  name:'February',  length:28, starts:6, days:{} } ,
    { num:2,  name:'March',     length:31, starts:0, days:{} } ,
    { num:3,  name:'April',     length:30, starts:3, days:{} } ,
    { num:4,  name:'May',       length:31, starts:5, days:{} } ,
    { num:5,  name:'June',      length:30, starts:1, days:{} } ,
    { num:6,  name:'July',      length:31, starts:3, days:{} } ,
    { num:7,  name:'August',    length:31, starts:6, days:{} } ,
    { num:8,  name:'September', length:30, starts:2, days:{} } ,
    { num:9,  name:'October',   length:31, starts:4, days:{} } ,
    { num:10, name:'November',  length:30, starts:0, days:{} } ,
    { num:11, name:'December',  length:31, starts:2, days:{} }
  ];

  // props.addYear = todaysYear;
  return months2020[todaysMonth];
}

export default setupCalendar;