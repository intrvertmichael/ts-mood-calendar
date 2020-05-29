import React from 'react';
import {LogIn} from '../redux/actions/firebaseActions';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import './../syles/LogInPage.css'

const LogInPage = (props:any) =>{
  return (
    <div className='login'>
      <div className='login-message'>
        log in page
      </div>
      <button  className='login-btn' onClick={()=>props.LogIn()}>Log In</button>
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