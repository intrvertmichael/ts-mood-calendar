import React, { useEffect } from 'react';
import '../syles/Calendar.css';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import Header from './Header';
import Days from './Days';
import {calendarCreation} from './CalendarCreation';
import {MonthDetails} from './_calendar_types';
import {AppStateDetails} from './_reducer_types';

import {updateCurrentMonth} from '../redux/actions/currentActions';
import {addMonth} from '../redux/actions/calendarActions';
import {syncFirebase} from '../redux/actions/firebaseActions';

const Calendar:React.FC = (props:any) => {
  const { addMonth,updateCurrentMonth } = props;
  useFirestoreConnect(`userCalendars`);

  // when calendar starts sets blank today's month
  useEffect( () => {
    const todaysMonth = new Date().getMonth();
    let month:MonthDetails = calendarCreation(todaysMonth);
    addMonth(month);
    updateCurrentMonth(month);
  }, [addMonth, updateCurrentMonth] )


  // Did firestore get loaded ?
  if(props.firestore.data.userCalendars){
    console.log('-> firestore is Loaded');
    syncFirebase();
  } 
  else {
    console.log('firestore is empty');
    // month = calendarCreation(todaysMonth);
  }


  return (
    <div className='calendar'>
      <Header month={props.month.name} year={props.year} />
      <Days month={ props.month }/>
    </div>
  )
}

const mapStateToProps = (state:AppStateDetails) => {
  console.log('rendering calendar');
  console.log('state', state);
  return {
    year: state.current.year,
    month: state.current.month,
    uid: state.firebase.auth.uid,
    firestore: state.firestore
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