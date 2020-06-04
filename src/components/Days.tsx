import React from 'react';
import '../syles/Days.css';
import { AppStateDetails } from './_reducer_types';
import SingleDay from './SingleDay';
import { connect } from 'react-redux';

const Days = (props: any) => {
	let daysArray: JSX.Element[] = [];
	const calendarSize = 42; // figure out calendar size

	for (let i = 0; i < calendarSize; i++) {
		// going through the days of the month
		if (
			i > props.month.starts &&
			i <= props.month.length + props.month.starts
		) {
			daysArray.push(<SingleDay key={i} pos={i} starts={props.month.starts} />);
		} else {
			daysArray.push(<div className='not-day' key={i} />);
		}
	} // end of going through month days

	return <div className='days'> {daysArray} </div>;
};

const mapStateToProps = (state: AppStateDetails) => {
	return {
		month: state.current.month,
	};
};

export default connect(mapStateToProps)(Days);
