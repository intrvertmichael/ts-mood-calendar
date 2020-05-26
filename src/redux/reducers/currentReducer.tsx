
import {setIn, merge} from 'immutable';

const initial = {
  modalOpen: false,
  year:null,
  month:null,
  day:null
}

interface CurrentReducerDetails {
  type:string,
  modalOpen:boolean,
  year:number,
  month:number,
  day:number
}

const currentReducer = (state = initial, action:CurrentReducerDetails) => {
  switch(action.type) {

    case 'UPDATE_MODAL':
      return setIn(state, ['modalOpen'], !state.modalOpen);

    case 'UPDATE_CURRENT_MONTH':
      return setIn(state, ['month'], action.month);

    case 'UPDATE_CURRENT_DAY':
      return setIn(state, ['day'], action.day);

    case 'RESET_CURRENT':
      return merge(state, { modalOpen:false, day:null })

    default:
      return state;

  }
}

export default currentReducer;