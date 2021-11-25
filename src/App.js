import React from 'react';
import './App.css';
import Main from './sections/Main';
import Ratings from './sections/Ratings';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from './components/Loader';
import Fade from './utils/Fade';

function App(props) {
	return (
		<div className="App">
			<Switch>
				<Route path="/show" component={Ratings} />
				<Route path="/" component={Main} />
			</Switch>
			<Fade show={props.loading.fullScreen}>
				<Loader />
			</Fade>
		</div>
	);
}

const mapStateToProps = (state) => ({
	loading: state.loading
});

export default connect(mapStateToProps)(App);
