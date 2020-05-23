import React from 'react';
import './SingleDay.css';

interface SingleDayDetails {
  key: number,
  i: number,
  starts:number
}

const SingleDay:React.FC<SingleDayDetails> = (props) =>{
  let classes = 'single-day ';
  const currentDay = new Date().getDate();
  let dayNum:number = 0;

  if(props.i && props.starts){
    dayNum = props.i - props.starts;

    if( currentDay===dayNum ){
      classes += 'currentDay ';
    }
  }

  const dayClicked = () =>{
    console.log(`day ${dayNum} clicked`);
  }


  return (
    <div className={classes} onClick={()=>dayClicked()}>
      {dayNum>0? dayNum : ''}
    </div>
  )
}


export default SingleDay;