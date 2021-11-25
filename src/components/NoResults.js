import React from 'react';
import icon from '../assets/error-icon.png';
import styled from 'styled-components';
import { connect } from 'react-redux';

const NoResultsStyled = styled.div`
	filter: grayscale(50%);
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: center;
	.image-container {
		width: 30%;
	}
	.description {
		font-size: 20px;
		color: grey;
		span {
			font-style: italic;
			color: black;
		}
	}
`;

function NoResults(props) {

	return (
		<NoResultsStyled>
			<div className="image-container">
				<img src={icon} alt="404 icon" />
			</div>
			<div className="description">
				Your search - <span>{props.search}</span> - did not match any shows.
			</div>
		</NoResultsStyled>
	);
}
const mapStateToProps = (state) => ({
	search: state.search
});

export default connect(mapStateToProps)(NoResults);
