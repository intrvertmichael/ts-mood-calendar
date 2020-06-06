import { Dispatch } from 'redux';
import { GetStateDetails } from '../../components/_reducer_types';
import _ from 'lodash';
// import { mergeDeep } from 'immutable';

export const LogIn: any = () => {
	return (
		dispatch: Dispatch,
		getState: GetStateDetails,
		{ getFirebase }: any
	) => {
		const firebase = getFirebase();
		firebase
			.login({ provider: 'google', type: 'popup' })
			.then(() => console.log('Logged in...'))
			.catch(() => console.log('Log in failed'));
	};
};

export const LogOut: any = () => {
	return (
		dispatch: Dispatch,
		getState: GetStateDetails,
		{ getFirebase }: any
	) => {
		const firebase = getFirebase();
		firebase
			.auth()
			.signOut()
			.then(() => {
				console.log('Signed Out...');
				dispatch({ type: 'LOG_OUT' });
				dispatch({ type: 'RESET_APP' });
			});
	};
};

export const syncFirebase: any = () => {
	return (
		dispatch: Dispatch,
		getState: GetStateDetails,
		{ getFirestore }: any
	) => {
		const firebaseAuth: string = getState().firebase.auth.uid;
		const reduxCalendar = getState().calendar;

		let firestoreCalendar;
		if (getState().firestore.data.userCalendars[firebaseAuth]) {
			firestoreCalendar = getState().firestore.data.userCalendars[firebaseAuth]
				.stored;
		} else {
			firestoreCalendar = {};
		}
		const calendarsEqual = _.isEqual(reduxCalendar, firestoreCalendar);

		if (!calendarsEqual) {
			dispatch({ type: 'FIREBASE_LOADED' });
			const firestore = getFirestore();

			if (
				getState().current.timesFirestoreLoaded <= 1 &&
				getState().current.day === null
			) {
				dispatch({ type: 'SYNC_WITH_FIREBASE', calendar: firestoreCalendar });
			} else {
				firestore
					.collection('userCalendars')
					.doc(firebaseAuth)
					.update({
						stored: reduxCalendar,
						lastUpdateAt: new Date(),
					})
					.then(() => console.log(true, 'updated Firestore'))
					.catch(() => console.log('Not able to updated Firestore'));
			}
			dispatch({
				type: 'UPDATE_CURRENT_MONTH',
				month: getState().current.month,
			});
		} else {
		}
	};
};
