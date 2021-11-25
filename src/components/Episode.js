import React from 'react';
import { connect } from 'react-redux';
import { relativePercToColor } from '../utils/colors';
import styled from 'styled-components';
// import * as actionCreators from '../store/actions/index';

const EpisodeStyled = styled.div.attrs(props => ({
	imDbRating: props.imDbRating,
	stats: props.stats
}))` 
	margin: 2px;
	padding: 2px 2px;
	background-color: ${props => props.imDbRating
	? relativePercToColor(props.imDbRating, props.stats.min, props.stats.max)
		: 'lightgrey'};
	font-size: 8px;
	display: flex;
	align-items: center;
	flex-flow: column wrap;
	.episodeTitle {
		height: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	${props => parseFloat(props.imDbRating) === props.stats.max && `border: 1px solid black;`};
	${props => parseFloat(props.imDbRating) === props.stats.min && `border: 1px solid blue;`};
	filter: grayscale(40%);
	;
`

function Episode(props) {
	const {imDbRating, title } = props.episode;


	return (
		<EpisodeStyled imDbRating={imDbRating} stats={props.stats}>
			<div className="episodeTitle">{title}</div>
			<div>{imDbRating}</div>
		</EpisodeStyled>
	);
}

const mapStateToProps = (state) => ({
	stats: state.stats
});

export default connect(mapStateToProps)(Episode);
