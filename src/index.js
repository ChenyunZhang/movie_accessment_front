import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore,combineReducers } from "redux";
import { Provider } from "react-redux";

let initStateofMovieReducer = {
  movies: []
}

let movieReducer = (state = initStateofMovieReducer, action) => {
  switch(action.type){
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload
      }
    default:
      return state
  }
}

let infoCamp = {
  moviesInfo: movieReducer
};

let rootReducer = combineReducers(infoCamp);

let storeObj = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
