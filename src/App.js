import React from 'react';
import './App.css';
import Logo from './logo.png';
import Main from './sections/Main';
import Ratings from './sections/Ratings';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<img src={Logo} alt="" />
			<Switch>
				<Route path="/show" component={Ratings} />
				<Route path="/" render={() => <Main />} />
			</Switch>
		</div>
	);
}

export default App;
