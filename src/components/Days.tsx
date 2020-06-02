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
			// find if i has a mood or message
			let moodNum: number = 0;
			if (props.labeledDays) {
				const labeledDaysArray = Object.keys(props.labeledDays);
				// eslint-disable-next-line array-callback-return
				labeledDaysArray.map((labeledDay) => {
					const calendarDay = i - props.month.starts;
					if (`day${calendarDay}` === labeledDay) {
						moodNum = props.labeledDays[labeledDay].mood;
					}
				});
			}

			// create the day
			daysArray.push(
				<SingleDay
					key={i}
					pos={i}
					starts={props.month.starts}
					mood={moodNum > 0 ? moodNum : null} // message = {moodMessage}
				/>
			);
		} else {
			daysArray.push(<div className='not-day' key={i} />);
		}
	} // end of going through month days

	return <div className='days'> {daysArray} </div>;
};

const mapStateToProps = (state: AppStateDetails) => {
	return {
		labeledDays: state.current.month.days,
	};
};

export default connect(mapStateToProps)(Days);
