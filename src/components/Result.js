import React, { useState } from 'react';
import Box from '@material-ui/core';
import imdb from '../utils/imdb';
import { useHistory } from 'react-router-dom';

export default function Result(props) {
	const [ show, setShow ] = useState({});
	const { title, id } = props.result;
	const history = useHistory();

	const handleClick = async () => {
		const dbShow = await imdb.queryDbForShow(id);
		console.log(dbShow);
		debugger;
		if (!dbShow) {
			await setShow(await imdb.addShow(props.result));
		} else if (!imdb.isUpdated(dbShow.lastUpdated, dbShow.fullTitle)) {
			await setShow(await imdb.updateShow(id, dbShow._id));
		} else {
			setShow(dbShow);
		}

		// history.push(`/show?id=${show._id}`);
	};
	return (
		<div>
			<div>{title}</div>
			<button onClick={handleClick}>{id}</button>
		</div>
	);
}
