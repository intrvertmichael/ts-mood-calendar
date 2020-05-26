import {Dispatch} from 'redux';

export const triggerModal:any = () => {
  return (dispatch:Dispatch, getState:()=>{}) => dispatch({type: 'UPDATE_MODAL'})
}

export const updateCurrentYear:any = () => {
  return (dispatch:Dispatch, getState:()=>{}) => {
    dispatch({
      type: 'UPDATE_CURRENT_YEAR',
      year: 2020
    })
  }
}

export const updateCurrentMonth:any = () => {
  return (dispatch:Dispatch, getState:()=>{}) => {
    dispatch({
      type: 'UPDATE_CURRENT_MONTH',
      month: 4
    })
  }
}

export const updateCurrenDay:any = (dayNum:number) => {
  return (dispatch:Dispatch, getState:()=>{}) => {
    dispatch({type: 'UPDATE_MODAL'});
    dispatch({
      type: 'UPDATE_CURRENT_DAY',
      day: dayNum
    })
  }
}

export const resetCurrent:any = () => {
  return (dispatch:Dispatch, getState:()=>{}) => dispatch({ type: 'RESET_CURRENT' });
}