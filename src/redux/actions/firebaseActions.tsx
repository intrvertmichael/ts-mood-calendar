
import {Dispatch} from 'redux';
import {GetStateDetails} from '../../components/_calendar_types';

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