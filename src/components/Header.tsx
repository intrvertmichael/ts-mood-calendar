import React from 'react';
import '../syles/Header.css';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppStateDetails } from './_reducer_types';
import { LogOut } from '../redux/actions/firebaseActions';
import { updateCurrentMonth } from '../redux/actions/currentActions';

interface HeaderDetails {
	month: string;
	year: number;
}

const Header = (props: any) => {
	const allMonthsArray = Object.entries(props.allMonths);
	let allMonthsJSX: JSX.Element[] = [];
	// eslint-disable-next-line array-callback-return
	allMonthsArray.map((m: any): void => {
		allMonthsJSX.push(
			<li key={m[1].num + 10} onClick={() => singleMonthClicked(m[1].num)}>
				{m[1].name}
			</li>
		);
	});

	const monthsClicked = () => {
		const menu = document.querySelector('.all-months');
		menu?.classList.toggle('grow');
	};

	const singleMonthClicked = (monthNum: number) => {
		props.updateCurrentMonth(monthNum);
	};

	return (
		<div className='header'>
			{allMonthsJSX.length > 2 ? (
				<div className='clickable-title' onClick={() => monthsClicked()}>
					{props.month.name} | {props.year}
				</div>
			) : (
				<div className='title'>
					{props.month ? props.month.name : ''} | {props.year}
				</div>
			)}

			<button onClick={() => props.LogOut()}>Log Out</button>
			<div className={'all-months'}>{allMonthsJSX}</div>
			<div className='day-labels'>
				<ul>
					<li>S</li>
					<li>M</li>
					<li>T</li>
					<li>W</li>
					<li>Th</li>
					<li>F</li>
					<li>S</li>
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = (state: AppStateDetails) => {
	const month = state.current.month;
	return {
		month: state.calendar.year2020[`month${month}`],
		allMonths: state.calendar.year2020,
		year: state.current.year,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		LogOut: () => dispatch(LogOut()),
		updateCurrentMonth: (monthNum: number) =>
			dispatch(updateCurrentMonth(monthNum)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
