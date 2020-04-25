import React, { useEffect } from 'react';
import imdb from '../utils/imdb';

export default function SearchResults() {
	useEffect(() => {
		// const seasons = [ 'season1', 'season2' ];
		// const dbShow = await imdb.addSeasons('5ea34d488759eeacdaf41a9e', seasons);
		// console.log(dbShow);
		// community id = tt1439629
		// const season1 = await imdb.getEpisodes('tt1439629', '4')
		// getData();
	}, []);

	const getData = async () => {
		const seasons = await imdb.getSeasons('tt1439629');
		console.log(seasons);
	};
	return (
		<div>
			<h1>Search Results</h1>
			<div>This Works!!!</div>
		</div>
	);
}
