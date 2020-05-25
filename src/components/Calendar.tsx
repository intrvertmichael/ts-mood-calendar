import React from 'react';
import '../syles/Calendar.css';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';

import Header from './Header';
import Days from './Days';
import setupCalendar from './CalendarSetup';

import {CalendarDetails} from './_calendar_types';


const Calendar:React.FC = (props:any) => {
  const cal:CalendarDetails = setupCalendar();

  return (
    <div className='calendar'>
      <Header month={cal.month.name} year={cal.year} />
      <Days month={cal.month}/>
    </div>
  )
}





interface mapStateToPropsDetails{
  counter:number
}

const mapStateToProps = (state:mapStateToPropsDetails) => {
  return {
    counter: state
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);