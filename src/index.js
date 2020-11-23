import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

let initStateofMovieReducer = {
  movies: [],
};

let movieReducer = (state = initStateofMovieReducer, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "UPDATE_MOVIES_ADD_VOTEUP":
      let copyOfmovie_1 = state.movies.map((movie) => {
        if (movie.id === action.payload.movie.id) {
          movie.voteup.push(action.payload);
          return movie;
        } else {
          return movie;
        }
      });
      return {
        ...state,
        movies: copyOfmovie_1,
      };
    case "UPDATE_MOVIES_ADD_VOTEDOWN":
      let copyOfmovie_2 = state.movies.map((movie) => {
        if (movie.id === action.payload.movie.id) {
          movie.votedown.push(action.payload);
          return movie;
        } else {
          return movie;
        }
      });
      return {
        ...state,
        movies: copyOfmovie_2,
      };
    default:
      return state;
  }
};

let infoCamp = {
  moviesInfo: movieReducer,
};

let rootReducer = combineReducers(infoCamp);

let storeObj = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
