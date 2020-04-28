import * as actionTypes from './actionTypes';
import imdb from '../../utils/imdb';

export const storeShow = (show) => {
	// BE
	return {
		type: actionTypes.SAVE,
		show: show
	};
};
