import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./sections/Main";
import showReducer from "./store/reducers/reducer";
import thunk from "redux-thunk"; // Middleware for asynchronous API calls
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";

// Simple middleware to log whenever an action is dispatched
const logger = () => {
  return (next) => {
    return (action) => {
      return next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  showReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

describe("App Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });

  test("Renders Main Text", () => {
    expect(wrapper.find("h1.title").text()).toContain(
      "TV Show Episode Ratings"
    );
  });
});
