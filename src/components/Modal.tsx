
import React from 'react';
import '../syles/Modal.css';
import '../syles/Moods.css';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {resetCurrent} from '../redux/actions/currentActions';
import {addMood, addMessage} from '../redux/actions/calendarActions';
import {AppStateDetails} from './_calendar_types';

const Modal:React.FC = (props:any) => {
  let storedMood:number = 0;
  let storedMessage:string='';

  const circleClicked = (moodNum:number) => props.addMood(moodNum);
  const messageClicked = () => {
    const response = prompt(`what was going on in ${props.currentMonth}/${props.currentDay}`);
    props.addMessage(response);
  };

  // get message and mood
  if(props.cal[`month${props.currentMonth}`]){
    if(props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`]) {

      storedMood = props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].mood?
      props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].mood : 0 ;

      storedMessage = props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].message?
      props.cal[`month${props.currentMonth}`].days[`day${props.currentDay}`].message : '' ;

    }
  }

  enum mood { bad=1, okay=2, good=3, excellent=4 };
  return (
    <div className='modal-container'>
      <div className={`modal mood${storedMood}`}>
        <button className='modal-btn' onClick={ () => props.resetCurrent() }> X </button>

        <div className='modal-content'>
          <p className='date'> { storedMood!==0? storedMood: 'no number' } </p>
          <button className='message' onClick={ () => messageClicked() }>
            { storedMessage!==''? storedMessage :'click here to add why' }
          </button>
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