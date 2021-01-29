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

interface CalendarProps {
	month: number;
	year: number;
	uid: string;
	userCalendars: {};
	addMonth: (month: MonthDetails) => void;
	syncFirebase: () => void;
	updateCurrentMonth: (monthNum: number) => void;
}

const Calendar = (props: CalendarProps) => {
	useFirestoreConnect(`userCalendars`);

	// When calendar starts show default today's month
	const { addMonth, updateCurrentMonth } = props;
	useEffect(() => {
		const todaysMonthNum = new Date().getMonth();
		const month: MonthDetails = calendarCreation(todaysMonthNum);
		addMonth(month);
		updateCurrentMonth(month.num);
	}, [addMonth, updateCurrentMonth]);

	// If firestore is loaded sync it.
	useEffect(() => {
		if (props.userCalendars) {
			if (props.month >= 0) {
				props.syncFirebase();
			}
		} else {
		}
	}, [props]);

	return (
		<div className='calendar'>
			{props.month >= 0 ? <Header /> : ''}
			{props.month >= 0 ? <Days /> : ''}
			{props.month >= 0 ? (
				<div className='mood-labels'>
					<ul>
						<li className='mood1'> Bad </li>
						<li className='mood2'> Okay </li>
						<li className='mood3'> Good </li>
						<li className='mood4'> Excellent </li>
					</ul>
				</div>
			) : (
				''
			)}
		</div>
	);
};

const mapStateToProps = (state: AppStateDetails) => {
	// console.log('-> Calendar is loaded');
	console.log('state', state);

	return {
		year: state.current.year,
		month: state.current.month,
		uid: state.firebase.auth.uid,
		userCalendars: state.firestore.data.userCalendars,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateCurrentMonth: (monthNum: number) =>
			dispatch(updateCurrentMonth(monthNum)),
		addMonth: (month: MonthDetails) => dispatch(addMonth(month)),
		syncFirebase: () => dispatch(syncFirebase()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
