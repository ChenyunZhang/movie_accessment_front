import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import MoviesContainer from "./movies/MoviesContainer";
import MovieDetails from "./movies/MovieDetails";
import Error from "./error"


function App(props) {
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((r) => r.json())
      .then((resp) => {
        props.setMovies(resp);
      });
  }, []);

  const showMovieObj = (routerProps) => {
    let id = routerProps.match.params.id;
    let num_id = parseInt(id);
    if (props.allMovies[0]) {
      let foundMovie = props.allMovies.find(movie => movie.id === num_id);
      if (foundMovie) {
        return <MovieDetails {...routerProps} movie={foundMovie} />;
      } else {
        return <Error />;
      }
    }
  };

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <MoviesContainer />
        </Route>

        <Route path="/movies/:id" exact render={showMovieObj} />

        <Route>
          <Error />
        </Route>
      </Switch>

    </React.Fragment>
  );
}

const setMovies = (movieArr) => {
  return {
    type: "SET_MOVIES",
    payload: movieArr,
  };
};

let mapDispatchToProps = {
  setMovies: setMovies,
};

let mapStateToProps = (gState) => {
  return {
    allMovies: gState.moviesInfo.movies,
    searchedMovies: gState.moviesInfo.filteredMovies
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
