
import React from 'react';
import Calendar from './components/Calendar';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import LogInPage from './components/LogInPage';

import Modal from './components/Modal';


function App(props:any) {
  return (
    <div className="container">
      { props.current? <Modal/> : '' }
      { props.loggedIn? <Calendar /> : <LogInPage /> }
    </div>
  );
}

const mapStateToProps = (state:any) => {
  return {
    calendar: state,
    current: state.current.modalOpen,
    loggedIn: state.firebase.auth.uid
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);