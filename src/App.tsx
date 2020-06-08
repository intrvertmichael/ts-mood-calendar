import React from 'react';
import Calendar from './components/Calendar';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import LogInPage from './components/LogInPage';
import Modal from './components/Modal';
import { AppStateDetails } from './components/_reducer_types';

interface AppProps {
	calendar: AppStateDetails;
	current: boolean;
	loggedIn: string;
}

const App = (props: AppProps) => {
	return (
		<div className='container'>
			{props.current ? <Modal /> : ''}
			{props.loggedIn ? <Calendar /> : <LogInPage />}
		</div>
	);
};

const mapStateToProps = (state: AppStateDetails) => {
	return {
		calendar: state,
		current: state.current.modalOpen,
		loggedIn: state.firebase.auth.uid,
	};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
