import React from 'react';
import '../syles/Modal.css';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {triggerModal} from '../redux/actions';


interface ModalDetails {
  triggerModal:()=>void
}

const Modal:React.FC<ModalDetails> = (props) => {

  return (
    <div className='modal-container'>
      <div className='modal'>
        <button onClick={()=>props.triggerModal()}> close </button>
        <div>
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
    triggerModal: () => dispatch(triggerModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);