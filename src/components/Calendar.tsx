import React from 'react';
import '../syles/Calendar.css';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';

import Header from './Header';
import Days from './Days';
import setupCalendar from './CalendarSetup';
import {updateCurrentMonth} from '../redux/actions/currentActions';
import {addMonth} from '../redux/actions/calendarActions';
import {AppStateDetails, MonthDetails} from './_calendar_types';

const Calendar:React.FC = (props:any) => {

  const month:MonthDetails = setupCalendar();
  props.updateCurrentMonth(month.num);
  props.addMonth(month);

  return (
    <div className='calendar'>
      <Header month={month.name} year={props.year} />
      <Days month={ month }/>
    </div>
  )
}

const mapStateToProps = (state:AppStateDetails) => {
  console.log(state);
  return {
    year: state.current.year
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {
    updateCurrentMonth: (monthNum:number) => dispatch(updateCurrentMonth(monthNum)),
    addMonth: (month:MonthDetails) => dispatch(addMonth(month)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);