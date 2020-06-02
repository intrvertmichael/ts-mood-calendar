import { Dispatch } from 'redux';
import { GetStateDetails } from '../../components/_reducer_types';
import { MonthDetails } from '../../components/_calendar_types';
import _ from 'lodash';
import { mergeDeep } from 'immutable';

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
			.then(() => console.log('Signed Out...'));
	};
};

export const syncFirebase: any = (monthNum: number) => {
	return (
		dispatch: Dispatch,
		getState: GetStateDetails,
		{ getFirestore }: any
	) => {
		const firebaseAuth: string = getState().firebase.auth.uid;
		const reduxCalendar = getState().calendar;
		const firestoreCalendar = getState().firestore.data.userCalendars[
			firebaseAuth
		].stored;
		const areCalendarsEqual = _.isEqual(reduxCalendar, firestoreCalendar);

		if (!areCalendarsEqual) {
			const mergedCalendars: any = mergeDeep(firestoreCalendar, reduxCalendar);
			const firestore = getFirestore();
			const cur: MonthDetails = mergedCalendars.year2020[`month${monthNum}`];

			firestore
				.collection('userCalendars')
				.doc(firebaseAuth)
				.set({
					stored: mergedCalendars,
					displayName: getState().firebase.auth.displayName,
					email: getState().firebase.auth.email,
					lastUpdateAt: new Date(),
				})
				.then(() => console.log('-> Firestore was updated'))
				.catch(() => console.log('Not able to update Firestore'));

			dispatch({ type: 'SYNC_WITH_FIREBASE', calendar: mergedCalendars });
			dispatch({ type: 'UPDATE_CURRENT_MONTH', month: cur });
		} else {
		}
	};
};
