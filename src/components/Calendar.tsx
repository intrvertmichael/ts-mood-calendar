import React from 'react';
import './Calendar.css';
import { connect } from 'react-redux';

import Header from './Header';
import Days from './Days';
import {CalendarDetails, MonthDetails} from './_calendar_types';
import {setCurrentMonth} from '../redux/actions';


const Calendar:React.FC = (props:any) =>{
  console.log(props.counter);

  const cal:CalendarDetails = setupCalendar();

  return (
    <div className='calendar'>
      <button onClick={()=>props.setCurrentMonth(5)}>something</button>

      <Header month={cal.month.name} year={cal.year} />
      <Days month={cal.month}/>
    </div>
  )
}




const setupCalendar = ():CalendarDetails =>{

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

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

  const m = months2020[currentMonth];
  const y = currentYear;

  return {month:m, year:y};
}



interface mapStateToPropsDetails{
  counter:number
}

const mapStateToProps = (state:mapStateToPropsDetails) => {
  return {
    counter: state
  }
}

interface mapDispatchToPropsDetails{
}

const mapDispatchToProps= (dispatch:any) => {
  return {
    setCurrentMonth: () => dispatch(setCurrentMonth(5))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);