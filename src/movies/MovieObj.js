import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function MovieObj(props) {
  return (
    <>
      <div className="card">
        <div className="ui fluid image">
          <Link to={`/movies/${props.movie.id}`}>
            <div className="image">
              <img className="test-card" src={props.movie.poster} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieObj;
