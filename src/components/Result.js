import React from 'react';
import Box from '@material-ui/core';
import imdb from '../utils/imdb';
import { useHistory } from 'react-router-dom';

export default function Result(props) {
	const { title, id } = props.result;
	const history = useHistory();

	const handleClick = () => {
		history.push(`/show?id=${id}`);
	};
	return (
		<div>
			<div>{title}</div>
			<button onClick={handleClick}>{id}</button>
		</div>
	);
}
