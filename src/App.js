import React from 'react';
import './App.css';
import Main from './sections/Main';
import Ratings from './sections/Ratings';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/show" component={Ratings} />
				<Route path="/" component={Main} />
			</Switch>
		</div>
	);
}

export default App;
