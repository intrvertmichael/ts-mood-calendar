import React from 'react';
import '../syles/Days.css';
import {MonthDetails} from './_calendar_types';

import Day from './SingleDay';

interface DaysDetails {
  month: MonthDetails;
}

const Days:React.FC<DaysDetails> = (props) =>{
  let daysArray: JSX.Element[] = [];

  const calendarSize = 42;

  for(let i=0; i < calendarSize ; i++){
    if( i > props.month.starts && i<props.month.length+props.month.starts){
      daysArray.push(<Day key={i} pos={i} starts={props.month.starts} />);
    } else {
      daysArray.push(<div className='not-day' key={i} />);
    }
  }


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  return (
    <div className='days'>
      {daysArray}
    </div>
  )
}

export default Days;