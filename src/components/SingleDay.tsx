
import React from 'react';
import '../syles/SingleDay.css';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {updateCurrenDay} from '../redux/actions/currentActions';
import {AppStateDetails} from './_reducer_types';

interface SingleDayDetails {
  key: number,
  pos: number,
  starts:number
}

const SingleDay = (props:any) =>{

  let classes = 'single-day ';
  const currentDay = new Date().getDate();
  let dayNum:number = 0;

  if(props.pos && props.starts){
    dayNum = props.pos - props.starts;

    if( currentDay===dayNum ){
      classes += 'currentDay ';
    }

    if(props.mood !== null){
      classes += `mood${props.mood}`
    }
  }

  const dayClicked = () =>{
    props.updateCurrenDay(dayNum);
  }

  return (
    <div className={classes} onClick={()=>dayClicked()}>
      {dayNum>0? dayNum : ''}
    </div>
  )
}

const mapStateToProps = (state:AppStateDetails) => {
  return {}
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {
    updateCurrenDay: (dayNum:number) => dispatch(updateCurrenDay(dayNum))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay);