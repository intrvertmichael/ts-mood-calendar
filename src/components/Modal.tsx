import React from 'react';
import '../syles/Modal.css';
import '../syles/Moods.css';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {resetCurrent} from '../redux/actions/currentActions';
import {addMood, addMessage} from '../redux/actions/calendarActions';

import {AppStateDetails} from './_calendar_types';

const Modal:React.FC = (props:any) => {

  enum mood { bad=1, okay=2, good=3, excellent=4 };

  const circleClicked = (moodNum:number) =>{
    props.addMood(moodNum);
    // props.addMessage('moodNum');
  }

  let storedMood:number = 0;
  let storedMessage:string = '';

  if(props.cal){
    if(props.cal[`month${props.currentMonth}`]){
        if(props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`]){
          storedMood = props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].mood?
          props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].mood : '90';

          storedMessage = props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].message?
          props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].message : 'hello';

          console.log(storedMood, storedMessage);
        }
    }
  }

  const messageClicked = () =>{
    console.log('message button was clicked');
  }

  return (
    <div className='modal-container'>
      <div className='modal'>
        <button className='modal-btn' onClick={()=>props.resetCurrent()}> X </button>
        <div className='modal-content'>
          <p className='date'> {storedMood}</p>
          <p className='message'> { storedMessage!==''? storedMessage : <button onClick={()=>messageClicked()}>add message</button> } </p>
        </div>
        <div className='mood-circles'>
          <button className='mood1' onClick={()=>circleClicked(mood.bad)}> Bad </button>
          <button className='mood2' onClick={()=>circleClicked(mood.okay)}> Okay </button>
          <button className='mood3' onClick={()=>circleClicked(mood.good)}> Good </button>
          <button className='mood4' onClick={()=>circleClicked(mood.excellent)}> Excellent </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state:AppStateDetails) =>{
  return {
    cal: state.calendar.year2020,
    currentMonth: state.current.month,
    currentDay: state.current.day
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {
    resetCurrent: () => dispatch(resetCurrent()),
    addMood: (moodNum:number) => dispatch(addMood(moodNum)),
    addMessage: (message:string) => dispatch(addMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);