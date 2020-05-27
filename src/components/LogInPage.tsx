import React from 'react';
import {LogIn} from '../redux/actions/firebaseActions';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

const LogInPage = (props:any) =>{
  return (
    <div>
      log in page
      <button onClick={()=>props.LogIn()}>Log In</button>
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return {
    calendar: state,
    current: state.current.modalOpen,
    loggedIn: state.firebase.auth.uid
  }
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {
    LogIn: () => dispatch(LogIn())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);