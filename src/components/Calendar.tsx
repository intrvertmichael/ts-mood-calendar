import React from 'react';
import '../syles/Calendar.css';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';

import Header from './Header';
import Days from './Days';
import setupCalendar from './CalendarSetup';
import {updateCurrentMonth} from '../redux/actions/currentActions';
import {AppStateDetails, MonthDetails} from './_calendar_types';

const Calendar:React.FC = (props:any) => {

  const mon:MonthDetails = setupCalendar();
  props.updateCurrentMonth(mon.num);

  return (
    <div className='calendar'>
      <Header month={mon.name} year={props.year} />
      <Days month={ mon }/>
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
    updateCurrentMonth: (monthNum:number) => dispatch(updateCurrentMonth(monthNum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);