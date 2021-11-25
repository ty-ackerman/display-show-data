import React from 'react';
import Result from './Result';
import styled from 'styled-components';

const StyledResults = styled.div.attrs(props => ({}))`
		.results {
			display: flex;
			justify-content: ${props => props.results.length !== 6 ? 'flex-start' : 'space-between'};
			flex-flow: row wrap;
		}
	`;

export default function SearchResults(props) {
	const { results } = props;

	return (
		<StyledResults results={results}>
			<h1>Results</h1>
			<div className="results">
				{results.map((result) => {
					return <Result result={result} />;
				})}
			</div>
		</StyledResults>
	);
}
