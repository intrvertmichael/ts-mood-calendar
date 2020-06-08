import React from 'react';
import { LogIn } from '../redux/actions/firebaseActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import './../syles/LogInPage.css';
import GoogleButton from 'react-google-button';
import { AppStateDetails } from './_reducer_types';

interface LogInPageProps {
	current: boolean;
	loggedIn: string;
	calendar: AppStateDetails;
	LogIn: () => void;
}

const LogInPage = (props: LogInPageProps) => {
	return (
		<div className='login'>
			<div className='login-message'>
				<h1>Mood Calendar</h1>
				<p>Keep track of your mood and what's going on.</p>
			</div>
			<div className='login-btn'>
				<GoogleButton type='light' onClick={() => props.LogIn()} />
			</div>
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
	return {
		LogIn: () => dispatch(LogIn()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
