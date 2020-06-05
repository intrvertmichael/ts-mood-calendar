import React from 'react';
import '../syles/Days.css';
import { AppStateDetails } from './_reducer_types';
import SingleDay from './SingleDay';
import { connect } from 'react-redux';

const Days = (props: any) => {
	let daysArray: JSX.Element[] = [];

	// figure out calendar size
	const calendarLength = props.month.starts + props.month.length;
	let calendarSize: number;
	if (calendarLength <= 28) {
		calendarSize = 28;
	} else if (calendarLength <= 35) {
		calendarSize = 35;
	} else {
		calendarSize = 42;
	}

	for (let i = 0; i < calendarSize; i++) {
		if (
			i >= props.month.starts &&
			i < props.month.length + props.month.starts
		) {
			daysArray.push(<SingleDay key={i} pos={i - props.month.starts + 1} />);
		} else {
			daysArray.push(<div className='not-day' key={i} />);
		}
	}

	return <div className='days'> {daysArray} </div>;
};

const mapStateToProps = (state: AppStateDetails) => {
	const month = state.current.month;
	return {
		month: state.calendar.year2020[`month${month}`],
	};
};

export default connect(mapStateToProps)(Days);
