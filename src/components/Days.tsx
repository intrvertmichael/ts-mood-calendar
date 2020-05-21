import React from 'react';
import './Days.css';

import Day from './SingleDay';

const Days:React.FC = () =>{
  let daysArray: JSX.Element[] = [];
  const calendarSize = 35;


  for(let i=0; i < calendarSize ; i++){
      daysArray.push(<Day key={i} i={i} name='michael'/>);
  }



  return (
    <div className='days'>
      {daysArray}
    </div>
  )
}

export default Days;