import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Rank(props) {
  return (
    <>
      <Link to={`/movies/${props.movie.id}`}>
      <div className="ui items rank-item">
        <div className="item">
          {/* <div className="image rank-image">
            <img src={props.movie.poster} />
          </div> */}
          <div className="content">
            <div className="header">{props.movie.title}</div>
            <div className="meta">
              <span className="ui label violet">
                {props.movie.original_Language.toUpperCase()}
              </span>
              <span className="ui label blue">
                {props.movie.adult ? "Adult" : null}
              </span>
              <span className="ui label red">
                <i className="heart icon"></i>
              </span>
            </div>
            <div className="content">Release Date: {props.movie.release}</div>
          </div>
        </div>
        </div>
      </Link>
    </>
  );
}

export default Rank;
