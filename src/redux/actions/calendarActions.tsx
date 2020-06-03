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
	return (
		dispatch: Dispatch,
		getState: GetStateDetails,
		{ getFirestore }: any
	) => {
		console.log('inside of delete day');
		dispatch({
			type: 'DELETE_DAY',
			monthName: `month${getState().current.month.num}`,
			dayName: `day${getState().current.day}`,
		}); // day is being deleted

		console.log('up to here', getState());

		// const firebaseAuth: string = getState().firebase.auth.uid;
		// const firestore = getFirestore();

		// firestore
		// 	.collection('userCalendars')
		// 	.doc(firebaseAuth)
		// 	.set({
		// 		stored: getState().calendar,
		// 		displayName: getState().firebase.auth.displayName,
		// 		email: getState().firebase.auth.email,
		// 		lastUpdateAt: new Date(),
		// 	})
		// 	.then(() => {
		// 		console.log('before dispatching', getState());

		// 		const currentMonthNum: any = getState().current.month.num;
		// 		const month: any = getState().calendar.year2020[
		// 			`month${currentMonthNum}`
		// 		];
		// 		dispatch({ type: 'UPDATE_CURRENT_MONTH', month: month });

		// 		console.log('-> Firestore was updated');
		// 	})
		// 	.catch(() => console.log('Not able to update Firestore'));

		// console.log('after delete day', getState().calendar);
	};
};
