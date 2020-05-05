import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionCreators from '../store/actions/index';
import { isEmpty } from 'lodash';
import imdb from '../utils/imdb';
import Season from '../components/Season';
import styled from 'styled-components';
import BackButton from '../components/BackButton';

function Ratings(props) {
	useEffect(() => {
		getShow();
	}, []);

	useEffect(
		() => {
			const stats = imdb.getStats(props.show.seasons);
			props.onGetStats(stats);
		},
		[ props.show ]
	);
	const getShow = async () => {
		if (isEmpty(props.show)) {
			const [ id ] = props.location.search.match(imdb.idRegex);
			const dbShow = await imdb.queryDbForShow(id);
			props.onSaveShow(dbShow);
		}
	};

	const TableStyled = styled.div`
		margin: 0 inherit;
		display: flex;
	`;

	if (!isEmpty(props.show)) {
		return (
			<Fragment>
				<BackButton />
				<h1>{props.show.title}</h1>
				<TableStyled className="section">
					{props.show.seasons.map((season, key) => {
						return <Season key={key} seasonNum={key} season={season} stats={props.stats} />;
					})}
				</TableStyled>
			</Fragment>
		);
	}
	return (
		<div>
			<div>Loading ...</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	show: state.show,
	stats: state.stats
});

const mapDispatchToProps = (dispatch) => ({
	onSaveShow: (show) => dispatch(actionCreators.storeShow(show)),
	onGetStats: (stats) => dispatch(actionCreators.storeStats(stats))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
