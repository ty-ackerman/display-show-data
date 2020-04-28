import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	show: {},
	search: {},
	results: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SAVE:
			return updateObject(state, { show: action.show });
		default:
			return state;
	}
};

export default reducer;
