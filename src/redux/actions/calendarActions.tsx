import {Dispatch} from 'redux';
import {GetStateDetails} from '../../components/_reducer_types';
import {MonthDetails} from '../../components/_calendar_types';

export const addMonth:any = (month:MonthDetails) =>{
  return (dispatch:Dispatch, getState:GetStateDetails) => {
    dispatch({ type:'CREATE_MONTH', monthName:`month${month.num}`, month:month });
  }
}

export const addMood:any = (moodNum:number) =>{
  return (dispatch:Dispatch, getState:GetStateDetails) => {
    dispatch({
      type: 'CREATE_MOOD',
      monthName:`month${getState().current.month}`,
      dayName:`day${getState().current.day}`,
      mood:moodNum
    });
  }
}

export const addMessage:any = (message:string) =>{
  return (dispatch:Dispatch, getState:GetStateDetails) => {
    dispatch({
      type: 'CREATE_MESSAGE',
      monthName:`month${getState().current.month}`,
      dayName:`day${getState().current.day}`,
      message:message
    });
  }
}