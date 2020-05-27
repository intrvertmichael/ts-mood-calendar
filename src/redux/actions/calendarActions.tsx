import {Dispatch} from 'redux';
import {GetStateDetails} from '../../components/_calendar_types';

export const addMonth:any = () =>{
  const m = {num:2, name:'March', length:31, starts:0, days:{day11:{mood:1}, day12:{mood:2}, day13:{mood:3}, day14:{mood:4}}};
  return (dispatch:Dispatch, getState:GetStateDetails) => {
    dispatch({type: 'CREATE_MONTH', month:{ month5:{m} }});
  }
}

export const addMood:any = (moodNum:number) =>{
  return (dispatch:Dispatch, getState:GetStateDetails) => {
    const monthNum = getState().current.month;
    const dayNum = getState().current.day;
    dispatch({type: 'CREATE_MOOD', monthName:`month${monthNum}`, dayName:`day${dayNum}`, mood:moodNum });
  }
}

export const addMessage:any = (message:string) =>{
  return (dispatch:Dispatch, getState:GetStateDetails) => {
    const monthNum = getState().current.month;
    const dayNum = getState().current.day;
    dispatch({type: 'CREATE_MESSAGE', monthName:`month${monthNum}`, dayName:`day${dayNum}`, message:message });
  }
}