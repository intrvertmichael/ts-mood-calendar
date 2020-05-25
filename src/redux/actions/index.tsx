import {Dispatch, Action} from 'redux';

export const plus = () =>{
  return {type: 'ADD'}
}

export const minus = () =>{
  return {type: 'MINUS'}
}


export const cal:any = () =>{
  return (dispatch:Dispatch<Action>, getState:()=>{}) => {
    dispatch({type: 'CAL'});
    console.log(getState());
  }
}