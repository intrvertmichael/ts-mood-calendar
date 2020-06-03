import { setIn, merge } from 'immutable';
import { CurrentReducerDetails } from '../../components/_reducer_types';

const initialState = {
	modalOpen: false,
	year: 2020,
	month: {},
	day: null,
	timesFirestoreLoaded: 0,
};

const currentReducer = (
	state = initialState,
	action: CurrentReducerDetails
) => {
	switch (action.type) {
		case 'FIREBASE_LOADED':
			return { ...state, timesFirestoreLoaded: state.timesFirestoreLoaded + 1 };

		case 'UPDATE_MODAL':
			return setIn(state, ['modalOpen'], !state.modalOpen);

		case 'UPDATE_CURRENT_MONTH':
			return setIn(state, ['month'], action.month);

		case 'UPDATE_CURRENT_DAY':
			return setIn(state, ['day'], action.day);

		case 'RESET_CURRENT':
			return merge(state, { modalOpen: false, day: null });

		default:
			return state;
	}
};

export default currentReducer;
