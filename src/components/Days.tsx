import React from 'react';
import '../syles/Days.css';
import {MonthDetails} from './_calendar_types';
import {AppStateDetails} from './_reducer_types';
import SingleDay from './SingleDay';
import {connect} from 'react-redux';

interface DaysDetails {
  month: MonthDetails;
  labeledDays:{}
}

const Days:React.FC<DaysDetails> = (props) =>{
  let daysArray: JSX.Element[] = [];

  const calendarSize = 42;

  // somewhere in here look through firebase
  // if the day has a mood then label the day
  // send it into the SingleDay so
  // it doesnt have to check over and over again but just once

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  for(let i=0; i < calendarSize ; i++){
    if( i > props.month.starts && i<props.month.length+props.month.starts){

      // find if i has a mood or message
      let moodNum:number = 0;
      if(props.labeledDays){
        const labeledDaysArray = Object.keys(props.labeledDays);
        labeledDaysArray.map(labeledDay => {
          const calendarDay = i - props.month.starts;
          if(`day${calendarDay}` === labeledDay){
            console.log(labeledDay)
            // if(props.labeledDays[`day${calendarDay}`].num)
            moodNum = 4;
          }
        });
      }

      // create the day
      daysArray.push(
      <SingleDay
        key = {i}
        pos = {i}
        starts = {props.month.starts}
        mood = {moodNum>0? moodNum : null}
        // message = {moodMessage}
      />);
    }
    else { daysArray.push(<div className='not-day' key={i} />) }
  }

  return ( <div className='days'> {daysArray} </div> )
}

const mapStateToProps = (state:AppStateDetails) =>{
  return {
    labeledDays: state.current.month.days
  }
}

export default connect(mapStateToProps)(Days);