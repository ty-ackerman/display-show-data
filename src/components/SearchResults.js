import React, { useEffect } from 'react';
import Result from './Result';
import styled from 'styled-components';

export default function SearchResults(props) {
	const { results } = props;

	const StyledResults = styled.div`
		.results {
			display: flex;
			justify-content: ${results.length !== 6 ? 'flex-start' : 'space-between'};
			flex-flow: row wrap;
		}
	`;

	return (
		<StyledResults>
			<h1>Results</h1>
			<div className="results">
				{results.map((result) => {
					return <Result result={result} />;
				})}
			</div>
		</StyledResults>
	);
}
