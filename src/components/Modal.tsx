import React from 'react';
import '../syles/Modal.css';
import '../syles/Moods.css';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { resetCurrent } from '../redux/actions/currentActions';
import {
	addMood,
	addMessage,
	deleteDay,
} from '../redux/actions/calendarActions';
import { AppStateDetails } from './_reducer_types';

const Modal: React.FC = (props: any) => {
	let storedMood: number = 0;
	let storedMessage: string = '';

	const circleClicked = (moodNum: number) => props.addMood(moodNum);
	const messageClicked = () => {
		const response = prompt(
			`what was going on in ${props.currentMonth}/${props.currentDay}`
		);
		props.addMessage(response);
	};

	// get message and mood
	const monthOBj = props.cal[`month${props.currentMonth.num}`];
	if (monthOBj) {
		if (monthOBj.days[`day${props.currentDay}`]) {
			storedMood = monthOBj.days[`day${props.currentDay}`].mood
				? monthOBj.days[`day${props.currentDay}`].mood
				: 0;

			storedMessage = monthOBj.days[`day${props.currentDay}`].message
				? monthOBj.days[`day${props.currentDay}`].message
				: '';
		}
	}

	enum mood {
		bad = 1,
		okay = 2,
		good = 3,
		excellent = 4,
	}

	const stroredMoodMessage = makeMoodMessage(storedMood);

	return (
		<div className='modal-container'>
			<div className={`modal mood${storedMood}`}>
				<button className='modal-btn' onClick={() => props.resetCurrent()}>
					{' '}
					X{' '}
				</button>

				<div className='modal-content'>
					<p className='date'> {stroredMoodMessage} </p>
					<button className='message' onClick={() => messageClicked()}>
						{storedMessage !== '' ? storedMessage : 'click here to add why'}
					</button>
				</div>

				<div className='mood-circles'>
					<button className='mood1' onClick={() => circleClicked(mood.bad)}>
						Bad
					</button>
					<button className='mood2' onClick={() => circleClicked(mood.okay)}>
						Okay
					</button>
					<button className='mood3' onClick={() => circleClicked(mood.good)}>
						Good
					</button>
					<button
						className='mood4'
						onClick={() => circleClicked(mood.excellent)}>
						Excellent
					</button>
				</div>

				<button onClick={() => props.deleteDay()}> clear day </button>
			</div>
		</div>
	);
};

const makeMoodMessage = (moodNum: number): string => {
	let moodMessage: string;
	if (moodNum === 1) {
		moodMessage = "You're feeling bad on this day";
	} else if (moodNum === 2) {
		moodMessage = "You're feeling okay on this day";
	} else if (moodNum === 3) {
		moodMessage = "You're feeling good on this day";
	} else if (moodNum === 4) {
		moodMessage = "You're feeling excellent on this day";
	} else {
		moodMessage = "You don't have a mood for this day";
	}
	return moodMessage;
};

const mapStateToProps = (state: AppStateDetails) => {
	return {
		cal: state.calendar.year2020,
		currentMonth: state.current.month,
		currentDay: state.current.day,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		resetCurrent: () => dispatch(resetCurrent()),
		addMood: (moodNum: number) => dispatch(addMood(moodNum)),
		addMessage: (message: string) => dispatch(addMessage(message)),
		deleteDay: () => dispatch(deleteDay()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
