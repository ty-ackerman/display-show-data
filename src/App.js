import React, { useEffect } from 'react';
import './App.css';
import Logo from './logo.png';
import imdb from './utils/imdb';
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
