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
  const { addMonth,updateCurrentMonth,syncFirebase } = props;
  useFirestoreConnect(`userCalendars`);

  const todaysMonth = new Date().getMonth();
  let month:MonthDetails;
  
  if(props.firestore.data.userCalendars){
    console.log('firestore is NOT empty');
    month = calendarCreation(todaysMonth);
    syncFirebase();
  } else {
    console.log('->  firestore is empty');
    month = calendarCreation(todaysMonth);
  }

  // this is the part i need to figure out.
  // what order should the firebase sync happen
  // and when return firebase then merge it with the local redux one
  useEffect( () => {
    console.log('->  inside of use effect');
    addMonth(month);
    updateCurrentMonth(month);
  }, [] )
  // by this time i need a month to do everything else with
  // then the month will pass the details to the other components


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