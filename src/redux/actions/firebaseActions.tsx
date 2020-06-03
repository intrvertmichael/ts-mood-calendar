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
			dispatch({ type: 'FIREBASE_LOADED' });

			console.log(
				'when first starts this should be blank?',
				getState().current.timesFirestoreLoaded
			);

			const mergedCalendars: any = mergeDeep(reduxCalendar, firestoreCalendar);
			const firestore = getFirestore();
			const cur: MonthDetails = mergedCalendars.year2020[`month${monthNum}`];

			if (getState().current.timesFirestoreLoaded === 1) {
				firestore
					.collection('userCalendars')
					.doc(firebaseAuth)
					.set({
						stored: mergedCalendars,
						displayName: getState().firebase.auth.displayName,
						email: getState().firebase.auth.email,
						lastUpdateAt: new Date(),
					})
					.then(() => console.log('-> Firestore was synced'))
					.catch(() => console.log('Not able to sync Firestore'));

				dispatch({ type: 'SYNC_WITH_FIREBASE', calendar: mergedCalendars });
			} else {
				firestore
					.collection('userCalendars')
					.doc(firebaseAuth)
					.set({
						stored: reduxCalendar,
						displayName: getState().firebase.auth.displayName,
						email: getState().firebase.auth.email,
						lastUpdateAt: new Date(),
					})
					.then(() => console.log('-> Redux calendar was posted on Firestore'))
					.catch(() => console.log('Not able to post to Firestore'));

				// dispatch({ type: 'SYNC_WITH_FIREBASE', calendar: mergedCalendars });
			}

			dispatch({ type: 'UPDATE_CURRENT_MONTH', month: cur });
		} else {
		}
	};
};
