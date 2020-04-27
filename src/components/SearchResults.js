import React, { useEffect } from 'react';
import Result from './Result';

export default function SearchResults(props) {
	const { results } = props;
	return (
		<div>
			<h1>Results</h1>
			{results.map((result) => {
				return <Result result={result} />;
			})}
		</div>
	);
}
