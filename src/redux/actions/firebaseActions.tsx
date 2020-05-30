
import {Dispatch} from 'redux';
import {GetStateDetails} from '../../components/_reducer_types';
import _ from 'lodash';

export const LogIn:any = () => {
  return (dispatch:Dispatch, getState:GetStateDetails, {getFirebase}:any) => {
    const firebase = getFirebase();
    firebase.login({ provider: 'google', type: 'popup'})
    .then(()=> console.log('Logged in...'))
    .catch(()=>console.log('Log in failed'))
  }
}

export const LogOut:any = () => {
  return (dispatch:Dispatch, getState:GetStateDetails, {getFirebase}:any) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(()=>console.log('Signed Out...'));
  }
}

export const syncFirebase:any = () => {
  return (dispatch:Dispatch, getState:GetStateDetails, {getFirestore}:any) => {
    const firebaseAuth:string = getState().firebase.auth.uid;
    const AllFirestoreCalendars = getState().firestore.data.userCalendars;
    const reduxCalendar = getState().calendar;
    const firestoreCalendar = AllFirestoreCalendars[firebaseAuth].stored;
    const areCalendarsEqual =  _.isEqual(reduxCalendar, firestoreCalendar);


    // if the calendars are not equal then merge them
    // and reupload to firebase so they are equal
    // console.log('reduxCalendar', reduxCalendar);
    // console.log('firestoreCalendar', firestoreCalendar);
    console.log( 'are calendars equal?', areCalendarsEqual );
    // const firebase = getFirestore();
    // dispatch({type:'SYNC_WITH_FIREBASE', calendar:firestoreCalendar});
    // console.log('after dispatch');
    console.log(getState());
  }
}