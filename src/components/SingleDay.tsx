import React from 'react';
import '../syles/SingleDay.css';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateCurrenDay } from '../redux/actions/currentActions';
import { AppStateDetails } from './_reducer_types';
import { DayDetails, MonthDetails } from './_calendar_types';

interface SingleDayProps {
	pos: number;
	starts: number;
	month: MonthDetails;
	labeledDays: DayDetails;
	updateCurrentDay: (dayNum: number) => void;
}

const SingleDay = (props: SingleDayProps) => {
	// find if i has a mood or message
	let moodNum: number = 0;
	if (props.labeledDays) {
		const labeledDaysArray = Object.keys(props.labeledDays);
		// eslint-disable-next-line array-callback-return
		labeledDaysArray.map((labeledDay) => {
			const calendarDay = props.pos;
			if (`day${calendarDay}` === labeledDay) {
				moodNum = props.labeledDays[labeledDay].mood;
			}
		});
	}
	const mood = moodNum;
	// const mood = props.mood;

	let classes = 'single-day ';
	const date = new Date();
	const currentDay = date.getDate();
	const currentMonth = date.getMonth();

	if (props.pos && props.starts>=0) {
		if (currentMonth === props.month.num && currentDay === props.pos) {
			classes += 'currentDay ';
		}
		if (mood !== null) {
			classes += `mood${mood}`;
		}
	}

	const dayClicked = () => {
		props.updateCurrentDay(props.pos);
	};

	return (
		<div className={classes} onClick={() => dayClicked()}>
			{props.pos}
		</div>
	);
};

const mapStateToProps = (state: AppStateDetails) => {
	const month = state.current.month;
	return {
		month: state.calendar.year2020[`month${month}`],
		labeledDays: state.calendar.year2020[`month${month}`].days,
		starts: state.calendar.year2020[`month${month}`].starts,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateCurrentDay: (dayNum: number) => dispatch(updateCurrenDay(dayNum)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleDay);
