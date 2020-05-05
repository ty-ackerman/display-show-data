import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import imdb from '../utils/imdb';
import { useHistory } from 'react-router-dom';

import * as actionCreators from '../store/actions/index';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

function Result(props) {
	const { title, id, image, year } = props.result;
	const history = useHistory();

	const StyledResult = styled(Box)`
		min-width: 200px;
		width: calc(100% / 5);
		cursor: pointer;
		margin-bottom: 20px;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		padding-right: 40px;
		img {
			filter: grayscale(100%);
			transition: .15s all linear;
		}
		> *:hover img {
			filter: grayscale(0);
		}
		.content {
			flex-grow: 1;
			display: flex;
			flex-flow: column wrap;
			justify-content: flex-start;
			margin-top: 10px;
		}
		.image-container {
			overflow: hidden;
			img {
				height: 315px;
			}
		}
		.title {
			font-weight: 500;
			font-size: 20px;
			position: relative;
			padding-bottom: 5px;
			margin-bottom: 5px;
			&:after {
				width: 20px;
				height: 1px;
				content: '';
				background-color: #dfdfdf;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}
		.year {
			color: grey;
		}

	`;

	const handleClick = async () => {
		const dbShow = await imdb.queryDbForShow(id);
		if (!dbShow) {
			props.onSaveShow(await imdb.addShow(props.result));
		} else if (
			!dbShow.seasons ||
			dbShow.seasons.length < 1 ||
			!imdb.isUpdated(dbShow.lastUpdated, dbShow.fullTitle)
		) {
			props.onSaveShow(await imdb.updateShow(id, dbShow._id));
		} else {
			props.onSaveShow(dbShow);
		}
		history.push(`/show?id=${id}`);
	};

	return (
		<StyledResult onClick={handleClick}>
			<div className="image-container">
				<img src={image} alt="" />
			</div>
			<div className="content">
				<div className="title">{title}</div>
				<div className="year">{year}</div>
			</div>
		</StyledResult>
	);
}

const mapStatetoProps = (state) => ({
	show: state.show,
	results: state.results
});

const mapDispatchToProps = (dispatch) => ({
	onSaveShow: (show) => dispatch(actionCreators.storeShow(show))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Result);
