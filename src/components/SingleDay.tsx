import React from 'react';
import '../syles/SingleDay.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateCurrenDay } from '../redux/actions/currentActions';
import { AppStateDetails } from './_reducer_types';

interface SingleDayDetails {
	key: number;
	pos: number;
	starts: number;
}

const SingleDay = (props: any) => {
	// find if i has a mood or message
	let moodNum: number = 0;
	if (props.labeledDays) {
		const labeledDaysArray = Object.keys(props.labeledDays);
		// eslint-disable-next-line array-callback-return
		labeledDaysArray.map((labeledDay) => {
			const calendarDay = props.pos - props.month.starts;
			if (`day${calendarDay}` === labeledDay) {
				moodNum = props.labeledDays[labeledDay].mood;
			}
		});
	}
	const mood = moodNum;
	// const mood = props.mood;

	let classes = 'single-day ';
	const currentDay = new Date().getDate();
	let dayNum: number = 0;

	if (props.pos && props.starts) {
		dayNum = props.pos - props.starts;

		if (currentDay === dayNum) {
			classes += 'currentDay ';
		}
		if (mood !== null) {
			classes += `mood${mood}`;
		}
	}

	const dayClicked = () => {
		props.updateCurrenDay(dayNum);
	};

	return (
		<div className={classes} onClick={() => dayClicked()}>
			{dayNum > 0 ? dayNum : ''}
		</div>
	);
};

const mapStateToProps = (state: AppStateDetails) => {
	return {
		labeledDays: state.current.month.days,
		month: state.current.month,
		starts: state.current.month.starts,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateCurrenDay: (dayNum: number) => dispatch(updateCurrenDay(dayNum)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay);
