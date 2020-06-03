import { Dispatch } from 'redux';
import { GetStateDetails } from '../../components/_reducer_types';
import { MonthDetails } from '../../components/_calendar_types';

// ADD
export const addMonth: any = (month: MonthDetails) => {
	return (dispatch: Dispatch, getState: GetStateDetails) => {
		dispatch({
			type: 'CREATE_MONTH',
			monthName: `month${month.num}`,
			month: month,
		});
		// console.log(getState());
	};
};

export const addMood: any = (moodNum: number) => {
	return (dispatch: Dispatch, getState: GetStateDetails) => {
		dispatch({
			type: 'CREATE_MOOD',
			monthName: `month${getState().current.month.num}`,
			dayName: `day${getState().current.day}`,
			mood: moodNum,
		});
	};
};

export const addMessage: any = (message: string) => {
	return (dispatch: Dispatch, getState: GetStateDetails) => {
		dispatch({
			type: 'CREATE_MESSAGE',
			monthName: `month${getState().current.month.num}`,
			dayName: `day${getState().current.day}`,
			message: message,
		});
	};
};

// REMOVE
export const deleteDay: any = () => {
	return (dispatch: Dispatch, getState: GetStateDetails) => {
		dispatch({
			type: 'DELETE_DAY',
			monthName: `month${getState().current.month.num}`,
			dayName: `day${getState().current.day}`,
		});
	};
};
