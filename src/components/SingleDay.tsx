
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {cal} from '../redux/actions';

import '../syles/SingleDay.css';

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
  }

  const dayClicked = () =>{
    props.cal();
  }

  return (
    <div className={classes} onClick={()=>dayClicked()}>
      {dayNum>0? dayNum : ''}
    </div>
  )
}




interface mapStateToPropsDetails{
  counter:number
}

const mapStateToProps = (state:mapStateToPropsDetails) => {
  return {
    counter: state
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {
    cal: () => dispatch(cal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay);