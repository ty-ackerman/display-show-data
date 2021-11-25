import React from 'react';
import Episode from './Episode';
import styled from 'styled-components';
import { connect } from 'react-redux';

const SeasonStyled = styled.div.attrs(props => ({show: props.show}))`width: calc(100% / ${props => props.show.seasons.length});`;

function Season(props) {
	const { seasonNum, season, show } = props;


	return (
		<SeasonStyled show={show}>
			<h3>{`Season ${seasonNum + 1}`}</h3>
			{season.map((episode) => {
				return <Episode episode={episode} key={episode.id} />;
			})}
		</SeasonStyled>
	);
}

const mapStateToProps = (state) => ({
	show: state.show
});

export default connect(mapStateToProps)(Season);
