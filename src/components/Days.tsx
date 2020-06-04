import React from 'react';
import '../syles/Days.css';
import { AppStateDetails } from './_reducer_types';
import SingleDay from './SingleDay';
import { connect } from 'react-redux';

const Days = (props: any) => {
	let daysArray: JSX.Element[] = [];

	// figure out calendar size
	const calendarLength = props.month.starts + props.month.length;
	console.log(calendarLength);
	let calendarSize = 42;

	for (let i = 0; i < calendarSize; i++) {
		if (
			i >= props.month.starts &&
			i <= props.month.length + props.month.starts
		) {
			daysArray.push(<SingleDay key={i} pos={i} />);
		} else {
			daysArray.push(<div className='not-day' key={i} />);
		}
	}

	return <div className='days'> {daysArray} </div>;
};

const mapStateToProps = (state: AppStateDetails) => {
	return {
		month: state.current.month,
	};
};

export default connect(mapStateToProps)(Days);
