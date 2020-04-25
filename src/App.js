import React from 'react';
import './App.css';
import Logo from './logo.png';
import SearchResults from './sections/SearchResults';

function App() {
	return (
		<div className="App">
			<img src={Logo} alt="" />
			<SearchResults />
		</div>
	);
}

export default App;
