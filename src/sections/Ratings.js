import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionCreators from '../store/actions/index';
import { isEmpty } from 'lodash';
import imdb from '../utils/imdb';

function Ratings(props) {
	useEffect(() => {
		getShow();
	});

	const getShow = async () => {
		if (isEmpty(props.show)) {
			const [ id ] = props.location.search.match(imdb.idRegex);
			const dbShow = await imdb.queryDbForShow(id);
			props.onSaveShow(dbShow);
		}
	};

	return (
		<div>
			<div>I am ratings</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	show: state.show
});

const mapDispatchToProps = (dispatch) => ({
	onSaveShow: (show) => dispatch(actionCreators.storeShow(show))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
