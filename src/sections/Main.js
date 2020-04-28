import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchResults from '../components/SearchResults';
import imdb from '../utils/imdb';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';

function Main(props) {
	const [ results, setResults ] = useState([]);
	const [ search, setSearch ] = useState('');

	const handleChange = async (e) => await setSearch(e.target.value);
	const handleSubmit = async (e) => {
		e.preventDefault();
		await props.onSaveSearch(search);
		const data = await imdb.getShow(search);
		props.onSaveResults(data);
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
			{props.results.length > 0 && <SearchResults results={props.results} />}
		</div>
	);
}

const mapStateToProps = (state) => ({
	results: state.results,
	search: state.search
});

const mapDispatchToProps = (dispatch) => ({
	onSaveSearch: (search) => dispatch(actionCreators.storeSearch(search)),
	onSaveResults: (shows) => dispatch(actionCreators.storeSearchResults(shows))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
