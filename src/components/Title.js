import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
	padding-bottom: 40px;
	margin-bottom: 40px;
	position: relative;
	@media (max-width: 1200px) {
		flex-flow: column wrap;
		align-items: flex-start;
		justify-content: flex-start;
	}
	align-items: flex-end;
	h1 {
		font-size: 34px;
		@media (max-width: 1200px) {
		}
	}
	h3 {
		font-weight: 400;
		color: grey;
	}
	&:after {
		width: 50px;
		height: 1px;
		content: '';
		background-color: #dfdfdf;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	@media (max-width: 585px) {
		h1 {
			font-size: 30px;
		}
	}
`;

export default function Title(props) {

	return (
		<TitleContainer className="title-container">
			<h1 className="title">{props.title}</h1>
			{props.subtitle && <h3 className="subtitle">{props.subtitle}</h3>}
		</TitleContainer>
	);
}
