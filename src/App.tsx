
import React from 'react';
import Calendar from './components/Calendar';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import Modal from './components/Modal';


function App(props:any) {
  return (
    <div className="container">
      { props.current? <Modal/> : '' }
      <Calendar />
    </div>
  );
}



interface mapStateToPropsDetails{
  current:{
    modalOpen:boolean
  },
  calendar:object
}

const mapStateToProps = (state:mapStateToPropsDetails) => {
  return {
    calendar: state,
    current: state.current.modalOpen
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);