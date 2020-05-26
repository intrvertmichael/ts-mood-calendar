
import {setIn} from 'immutable';

const initial = {
  modalOpen: false,
  year:null,
  month:null,
  day:null,
  mood:null,
  message:null
}

interface CurrentReducerDetails {
  type:string,
  modalOpen:boolean,
  year:number,
  month:number,
  day:number,
  mood:number,
  message:number
}

const currentReducer = (state = initial, action:CurrentReducerDetails) => {
  switch(action.type) {
    case 'UPDATE_MODAL':
      return setIn(state, ['modalOpen'], !state.modalOpen);

    default:
      return state;
  }
}

export default currentReducer;