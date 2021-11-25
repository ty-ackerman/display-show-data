import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	show: {},
	search: '',
	results: [],
	stats: {},
	loading: {
		isLoading: false,
		fullScreen: false
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE_SHOW:
			return updateObject(state, { show: action.show });
		case actionTypes.SAVE_SEARCH:
			return updateObject(state, { search: action.search });
		case actionTypes.SAVE_RESULTS:
			return updateObject(state, { results: action.results });
		case actionTypes.SAVE_STATS:
			return updateObject(state, { stats: action.stats });
		case actionTypes.SET_LOADING:
			return updateObject(state, { loading: action.loading });
		default:
			return state;
	}
};

export default reducer;
