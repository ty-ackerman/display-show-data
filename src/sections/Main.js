import React from 'react';
import SearchResults from '../components/SearchResults';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';
import MainSearch from '../components/MainSearch';

function Main(props) {
	return (
		<div className="section">
			<MainSearch />
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
