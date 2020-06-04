import React, { useEffect } from 'react';
import '../syles/Calendar.css';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import Header from './Header';
import Days from './Days';
import { calendarCreation } from './CalendarCreation';
import { MonthDetails } from './_calendar_types';
import { AppStateDetails } from './_reducer_types';

import { updateCurrentMonth } from '../redux/actions/currentActions';
import { addMonth } from '../redux/actions/calendarActions';
import { syncFirebase } from '../redux/actions/firebaseActions';

const Calendar: React.FC = (props: any) => {
	useFirestoreConnect(`userCalendars`);

	// when calendar starts show default today's month
	const { addMonth, updateCurrentMonth } = props;
	useEffect(() => {
		console.log('inside of use effect that adds month');

		const todaysMonth = new Date().getMonth();
		let month: MonthDetails = calendarCreation(todaysMonth);
		addMonth(month);
		updateCurrentMonth(month);
	}, [addMonth, updateCurrentMonth]);

	// Did firestore get loaded ?
	useEffect(() => {
		if (props.firestore.data.userCalendars) {
			if (props.month.num) {
				props.syncFirebase(props.month.num);
			}
		} else {
		}
	});

	return (
		<div className='calendar'>
			<Header />
			<Days />
		</div>
	);
};

const mapStateToProps = (state: AppStateDetails) => {
	console.log('-> Calendar is loaded');
	console.log('state', state);
	return {
		year: state.current.year,
		month: state.current.month,
		uid: state.firebase.auth.uid,
		firestore: state.firestore,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateCurrentMonth: (monthNum: number) =>
			dispatch(updateCurrentMonth(monthNum)),
		addMonth: (month: MonthDetails) => dispatch(addMonth(month)),
		syncFirebase: (monthNum: number) => dispatch(syncFirebase(monthNum)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
