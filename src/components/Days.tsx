import React from 'react';
import '../syles/Days.css';
import {MonthDetails} from './_calendar_types';
import SingleDay from './SingleDay';

interface DaysDetails {
  month: MonthDetails;
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
      daysArray.push(
      <SingleDay
        key = {i}
        pos = {i}
        starts = {props.month.starts}
        // mood = {moodNum}
        // message = {moodMessage}
      />);
    }
    else { daysArray.push(<div className='not-day' key={i} />) }
  }

  return ( <div className='days'> {daysArray} </div> )
}

export default Days;