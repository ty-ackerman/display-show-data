import React from 'react';
import { connect } from 'react-redux';
import { relativePercToColor } from '../utils/colors';
import styled from 'styled-components';

function Episode(props) {
	const { episodeNumber, imDbRating, imdbRatingCount, title, year, seasonNumber } = props.episode;

	const EpisodeStyled = styled.div`
		margin: 2px;
		padding: 2px 2px;
		background-color: ${imDbRating
			? relativePercToColor(imDbRating, props.stats.min, props.stats.max)
			: 'lightgrey'};
		font-size: 8px;
		.episodeTitle {
			height: 16px;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
		}
		${parseFloat(imDbRating) === props.stats.max && `border: 1px solid black;`};
		${parseFloat(imDbRating) === props.stats.min && `border: 1px solid blue;`};
		filter: grayscale(40%);
	`;

	return (
		<EpisodeStyled>
			<div>
				<div className="episodeTitle">{title}</div>
				{/* <div>{imDbRating}</div> */}
				{/* <div>{`Season ${seasonNumber} - Episode ${episodeNumber}`}</div> */}
			</div>
		</EpisodeStyled>
	);
}

const mapStateToProps = (state) => ({
	stats: state.stats
});

export default connect(mapStateToProps)(Episode);
