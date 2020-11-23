import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function MovieDetails(props) {
  const handleVoteup = () => {
    fetch("http://localhost:3000/voteups", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
            movie_id: props.movie.id,
        }),
      })
        .then((r) => r.json())
        .then((resp) => {
            props.updateMoviesUp(resp)
        });
  };

  const handleVotedown = () => {
    fetch("http://localhost:3000/votedowns", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
          movie_id: props.movie.id,
      }),
    })
      .then((r) => r.json())
      .then((resp) => {
          props.updateMoviesDown(resp)
      });
  };

  return (
    <>
      <div className="ui grid">
        <div className="three wide column"></div>
        <div className="ten wide column movie-detail-container">
          <div className="ui items">
            <div className="item">
              <div className="image">
                <img src={props.movie.poster} />
              </div>
              <div className="content">
                <div className="header">{props.movie.title}</div>
                <div className="meta">
                  <span>{props.movie.release}</span>
                </div>
                <div className="description">
                  <p>{props.movie.overview}</p>
                </div>
                <div className="extra">{props.movie.original_language}</div>
                <div className="ui label red" onClick={handleVoteup}>
                  {props.movie.voteup.length}
                  <i className="thumbs up icon"></i>
                </div>
                <div className="ui label blue" onClick={handleVotedown}>
                  {props.movie.votedown.length}
                  <i className="thumbs down icon"></i>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">Go Back</Link>
          <div className="three wide column"></div>
        </div>
      </div>
    </>
  );
}


const updateMoviesUp = (voteup) => {
  return {
    type: "UPDATE_MOVIES_ADD_VOTEUP",
    payload: voteup,
  };
};

const updateMoviesDown = (voteup) => {
  return {
    type: "UPDATE_MOVIES_ADD_VOTEDOWN",
    payload: voteup,
  };
};

let mapDispatchToProps = {
  updateMoviesUp:updateMoviesUp,
  updateMoviesDown:updateMoviesDown
};

export default connect(null,mapDispatchToProps)(MovieDetails);
