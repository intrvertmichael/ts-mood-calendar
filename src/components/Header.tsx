import React from 'react';
import '../syles/Header.css';

interface HeaderDetails {
  month: string,
  year: number
}

const Header:React.FC<HeaderDetails> = (props) =>{
  return (
    <div className='header'>
      {props.month} | {props.year}
    </div>
  )
}

export default Header;