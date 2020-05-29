import React, { useEffect } from 'react';
import '../syles/Calendar.css';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import Header from './Header';
import Days from './Days';
import {calendarCreation} from './CalendarCreation';
import {AppStateDetails, MonthDetails} from './_calendar_types';

import {updateCurrentMonth} from '../redux/actions/currentActions';
import {addMonth} from '../redux/actions/calendarActions';
import {syncFirebase} from '../redux/actions/firebaseActions';


const Calendar:React.FC = (props:any) => {
  useFirestoreConnect(`userCalendars`);
  const { addMonth,updateCurrentMonth,syncFirebase } = props;
  useEffect( () => {
    console.log('inside of use effect');

    const todaysMonth = new Date().getMonth();
    // enter firebase check here
    // if doesnt exist on firebase then set the defaults to the saved defaults
    const month:MonthDetails = calendarCreation(todaysMonth);

    addMonth(month);
    updateCurrentMonth(month);
    syncFirebase();
  }, [])

  return (
    <div className='calendar'>
      <Header month={props.month.name} year={props.year} />
      <Days month={ props.month }/>
    </div>
  )
}

const mapStateToProps = (state:AppStateDetails) => {
  console.log(state);
  return {
    year: state.current.year,
    month: state.current.month
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {
    updateCurrentMonth: (monthNum:number) => dispatch(updateCurrentMonth(monthNum)),
    addMonth: (month:MonthDetails) => dispatch(addMonth(month)),
    syncFirebase: () => dispatch(syncFirebase())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);