import {Dispatch} from 'redux';
import {GetStateDetails} from '../../components/_reducer_types';
import {MonthDetails} from '../../components/_calendar_types';

export const triggerModal:any = () => {
  return (dispatch:Dispatch, getState:GetStateDetails) => dispatch({type: 'UPDATE_MODAL'})
}

export const resetCurrent:any = () => {
  return (dispatch:Dispatch, getState:GetStateDetails) => dispatch({ type: 'RESET_CURRENT' });
}

export const updateCurrentYear:any = (yearNum:number) => {
  return (dispatch:Dispatch, getState:GetStateDetails) => dispatch({ type: 'UPDATE_CURRENT_YEAR', year: yearNum})
}

export const updateCurrentMonth:any = (month:MonthDetails) => {
  return (dispatch:Dispatch, getState:GetStateDetails) => dispatch({ type: 'UPDATE_CURRENT_MONTH', month: month })
}

export const updateCurrenDay:any = (dayNum:number) => {
  return (dispatch:Dispatch, getState:GetStateDetails) => {
    dispatch({ type: 'UPDATE_MODAL' });
    dispatch({ type: 'UPDATE_CURRENT_DAY', day: dayNum })
  }
}
