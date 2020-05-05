import React from 'react';
import Episode from './Episode';
import styled from 'styled-components';
import { connect } from 'react-redux';

function Season(props) {
	const { seasonNum, season } = props;

	const SeasonStyled = styled.div`width: calc(100% / ${props.show.seasons.length});`;

	return (
		<SeasonStyled>
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
