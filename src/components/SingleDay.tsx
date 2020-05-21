import React from 'react';
import './SingleDay.css';

interface DayDetails {
  key: number,
  i: number,
  name: string
}

const Day:React.FC<DayDetails> = (props) =>{
  let classes = 'single-day ';

  const currentDay = new Date().getDate();
  if(currentDay===props.i){
    classes += 'currentDay ';
  }

  console.log(classes);

  return (
    <div className={classes}>
      {props.i}
    </div>
  )
}

export default Day;