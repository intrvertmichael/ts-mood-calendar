import React from 'react';
import '../syles/Modal.css';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {resetCurrent} from '../redux/actions/currentActions';


interface ModalDetails {
  resetCurrent:()=>void
}

const Modal:React.FC<ModalDetails> = (props) => {

  return (
    <div className='modal-container'>
      <div className='modal'>
        <button className='modal-btn' onClick={()=>props.resetCurrent()}> X </button>
        <div className='modal-content'>
          modal
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state:object) =>{
  return {}
}

const mapDispatchToProps= (dispatch:Dispatch) => {
  return {
    resetCurrent: () => dispatch(resetCurrent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);