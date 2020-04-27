import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchResults from '../components/SearchResults';
import imdb from '../utils/imdb';

export default function Main() {
	const [ results, setResults ] = useState([]);
	const [ search, setSearch ] = useState('');

	const handleChange = async (e) => await setSearch(e.target.value);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await imdb.getShow(search);
		await setResults(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextField
					id="standard-basic"
					label="Standard"
					onChange={handleChange}
					label="Show Title"
					autoComplete="off"
				/>
			</form>
			{results.length > 0 && <SearchResults results={results} />}
		</div>
	);
}
