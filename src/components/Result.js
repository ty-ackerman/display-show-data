import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core';
import imdb from '../utils/imdb';
import { useHistory } from 'react-router-dom';

import * as actionCreators from '../store/actions/index';

function Result(props) {
	const [ show, setShow ] = useState({});
	const { title, id } = props.result;
	const history = useHistory();

	const handleClick = async () => {
		const dbShow = await imdb.queryDbForShow(id);
		if (!dbShow) {
			props.onSaveShow(await imdb.addShow(props.result));
		} else if (
			!dbShow.seasons ||
			dbShow.seasons.length < 1 ||
			!imdb.isUpdated(dbShow.lastUpdated, dbShow.fullTitle)
		) {
			props.onSaveShow(await imdb.updateShow(id, dbShow._id));
		} else {
			props.onSaveShow(dbShow);
		}

		// history.push(`/show?id=${show._id}`);
	};
	return (
		<div>
			<div>{title}</div>
			<button onClick={handleClick}>{id}</button>
		</div>
	);
}

const mapStatetoProps = (state) => ({
	show: state.show
});

const mapDispatchToProps = (dispatch) => ({
	onSaveShow: (show) => dispatch(actionCreators.storeShow(show))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Result);
