import React from 'react';
import './Calendar.css';

import Header from './Header';
import Days from './Days';

interface CalendarDetails {
  month:number,
  monthName:string,
  year:number
}

interface MonthDetails {
  name:string;
}

const Calendar:React.FC = () =>{

  const cal:CalendarDetails = setupCalendar();

  return (
    <div className='calendar'>
      <Header month={cal.monthName} year={cal.year} />
      <Days />
    </div>
  )
}

const setupCalendar = ():CalendarDetails =>{

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  // enter firebase check here
  // if doesnt exist on firebase then set the defaults to the saved defaults

  const months:MonthDetails[] = [
    { name: 'January'},
    { name: 'February'},
    { name: 'March'},
    { name: 'April'},
    { name: 'May'},
    { name: 'June'},
    { name: 'July'},
    { name: 'August'},
    { name: 'September'},
    { name: 'October'},
    { name: 'November'},
    { name: 'December'},
  ];


  const m = currentMonth;
  const mname = months[currentMonth].name;
  const y = currentYear;

  return {month:m, monthName:mname, year:y};
}

export default Calendar;