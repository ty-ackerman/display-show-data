import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'; // Middleware for asynchronous API calls
import { BrowserRouter } from 'react-router-dom';

// Import all reducers here
import todosReducer from './store/reducers/todos';
import showReducer from './store/reducers/reducer';

// To get access to Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Simple middleware to log whenever an action is dispatched
const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] Next state', store.getState());
			return result;
		};
	};
};

const store = createStore(showReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
