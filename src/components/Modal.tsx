import React from 'react';
import '../syles/Modal.css';
import '../syles/Moods.css';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { resetCurrent } from '../redux/actions/currentActions';
import { syncFirebase } from '../redux/actions/firebaseActions';
import {
	addMood,
	addMessage,
	deleteDay,
} from '../redux/actions/calendarActions';
import { AppStateDetails } from './_reducer_types';
import { MonthDetails, YearDetails } from './_calendar_types';

interface ModalProps {
	cal: YearDetails;
	currentDay: number;
	currentMonth: MonthDetails;
	addMessage: (message: string | null) => void;
	addMood: (mood: number) => void;
	deleteDay: () => void;
	resetCurrent: () => void;
	syncFirebase: () => void;
}

const Modal = (props: ModalProps) => {
	let storedMood: number = 0;
	let storedMessage: string = '';

	const circleClicked = (moodNum: number) => {
		props.addMood(moodNum);
		props.syncFirebase();
	};
	const messageClicked = () => {
		const response = prompt(
			`what was going on in ${props.currentMonth.name} ${props.currentDay} ?`,
			storedMessage
		);
		props.addMessage(response);
		props.syncFirebase();
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

	let storedMoodMessage: string;
	if (storedMood) {
		storedMoodMessage =
			`You were feeling ` +
			makeMoodMessage(storedMood) +
			` on ${props.currentMonth.name} ${props.currentDay}`;
	} else {
		storedMoodMessage = "You don't have a mood for this day";
	}

	return (
		<div className='modal-container'>
			<div className={`modal mood${storedMood}`}>
				<button className='modal-btn' onClick={() => props.resetCurrent()}>
					X
				</button>

				<div className='modal-content'>
					<p className='date'> {storedMoodMessage} </p>
					<button className='message' onClick={() => messageClicked()}>
						{storedMessage !== ''
							? storedMessage
							: "What's happening on this day"}
					</button>
				</div>

				<div className='mood-circles'>
					<button className='mood1' onClick={() => circleClicked(1)}>
						Bad
					</button>
					<button className='mood2' onClick={() => circleClicked(2)}>
						Okay
					</button>
					<button className='mood3' onClick={() => circleClicked(3)}>
						Good
					</button>
					<button className='mood4' onClick={() => circleClicked(4)}>
						Excellent
					</button>
				</div>

				<button
					className='clear-btn'
					onClick={() => {
						props.deleteDay();
						props.syncFirebase();
					}}>
					Reset
				</button>
			</div>
		</div>
	);
};

const makeMoodMessage = (moodNum: number): string => {
	let moodMessage: string;
	if (moodNum === 1) {
		moodMessage = 'bad';
	} else if (moodNum === 2) {
		moodMessage = 'okay';
	} else if (moodNum === 3) {
		moodMessage = 'good';
	} else if (moodNum === 4) {
		moodMessage = 'excellent';
	} else {
		moodMessage = "You don't have a mood for this day";
	}
	return moodMessage;
};

const mapStateToProps = (state: AppStateDetails) => {
	const month = state.current.month;
	return {
		cal: state.calendar.year2020,
		currentMonth: state.calendar.year2020[`month${month}`],
		currentDay: state.current.day,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		resetCurrent: () => dispatch(resetCurrent()),
		addMood: (moodNum: number) => dispatch(addMood(moodNum)),
		addMessage: (message: string | null) => dispatch(addMessage(message)),
		deleteDay: () => dispatch(deleteDay()),
		syncFirebase: () => dispatch(syncFirebase()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
