import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import { isEmpty } from 'lodash';
import imdb from '../utils/imdb';
import Season from '../components/Season';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';
import Fade from '../utils/Fade';


const TableStyled = styled.div`
		margin: 0 inherit;
		display: flex;
	`;
	
function Ratings(props) {
	useEffect(() => {
		getShow();
		setTimeout(() => {
			props.setLoading(false, false);
		}, 1000);
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
			props.setLoading(false);
		}
	};


	if (isEmpty(props.show)) {
		return (
			<Fade show={!props.loading.isLoading}>
				<Loader />
			</Fade>
		);
	}
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

const mapStateToProps = (state) => ({
	show: state.show,
	stats: state.stats,
	loading: state.loading
});
const mapDispatchToProps = (dispatch) => ({
	onSaveShow: (show) => dispatch(actionCreators.storeShow(show)),
	onGetStats: (stats) => dispatch(actionCreators.storeStats(stats)),
	setLoading: (isLoading, fullScreen) => dispatch(actionCreators.storeLoading(isLoading, fullScreen))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ratings);
