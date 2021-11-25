import * as actionTypes from './actionTypes';

export const storeShow = (show) => ({
	type: actionTypes.SAVE_SHOW,
	show: show
});

export const storeSearch = (q) => ({
	type: actionTypes.SAVE_SEARCH,
	search: q
});

export const storeSearchResults = (shows) => ({
	type: actionTypes.SAVE_RESULTS,
	results: shows
});

export const storeStats = (stats) => ({
	type: actionTypes.SAVE_STATS,
	stats: stats
});

export const storeLoading = (isLoading, fullScreen = false) => ({
	type: actionTypes.SET_LOADING,
	loading: {
		isLoading: isLoading,
		fullScreen: fullScreen
	}
});
