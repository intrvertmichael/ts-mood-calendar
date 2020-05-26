
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addDay, triggerModal} from '../redux/actions';

import '../syles/SingleDay.css';

interface SingleDayDetails {
  key: number,
  pos: number,
  starts:number
}

enum mood { bad=1, notsogood=2, okay=3, good=4 };

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
    console.log(mood.good);
    props.addDay(dayNum);
    props.triggerModal();
  }

  return (
    <div className={classes} onClick={()=>dayClicked()}>
      {dayNum>0? dayNum : ''}
    </div>
  )
}

// PROPS
// - - - - - - - - - - - - - - - - - - - - - - - - -

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
    addDay: (dayNum:number) => dispatch(addDay(dayNum)),
    triggerModal: () => dispatch(triggerModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay);