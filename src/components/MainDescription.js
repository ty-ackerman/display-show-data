import React from 'react';
import styled from 'styled-components';

export default function MainDescription() {
	const StyledDescription = styled.div`
		display: flex;
		align-items: center;
		padding-bottom: 70px;
		padding-right: 200px;
	`;
	return (
		<StyledDescription>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ipsum consequuntur laborum accusantium
			veritatis hic aperiam officia nesciunt, blanditiis, ducimus voluptatum. Voluptatem quaerat veniam odit, rem
			harum adipisci! Minima nam cupiditate aliquam nostrum eum fuga autem saepe laborum aspernatur dolorem?
		</StyledDescription>
	);
}
