import {Dispatch} from 'redux';

export const addMonth:any = () =>{
  const m = {num:2, name:'March', length:31, starts:0, days:{day11:{mood:1}, day12:{mood:2}, day13:{mood:3}, day14:{mood:4}}};
  return (dispatch:Dispatch, getState:()=>{}) => {
    dispatch({type: 'CREATE_MONTH', month:{ month5:{m} }});
    console.log(getState());
  }
}

export const addDay:any = (dayNum:number) =>{
  return (dispatch:Dispatch, getState:()=>{}) => {
    dispatch({type: 'CREATE_DAY', monthName:'month10', day:{ [`day${dayNum}`]:{mood:1, message:'hello'} }});
    console.log(getState());
  }
}
