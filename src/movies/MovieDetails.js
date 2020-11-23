import React from "react";

function MovieDetails(props) {
  return (
    <>
      <div className="ui grid">
        <div className="three wide column"></div>
        <div className="ten wide column movie-detail-container">
          <div className="ui items">
            <div class="item">
              <div class="image">
                <img src={props.movie.poster} />
              </div>
              <div class="content">
                <a class="header">{props.movie.title}</a>
                <div class="meta">
                  <span>{props.movie.release}</span>
                </div>
                <div class="description">
                  <p>{props.movie.overview}</p>
                </div>
                <div class="extra">{props.movie.original_language}</div>
                <div className="ui label red">
                  {props.movie.voteup.length}
                  <i class="thumbs up icon"></i>
                </div>
                <div className="ui label blue">
                  {props.movie.votedown.length}
                  <i class="thumbs down icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="three wide column"></div>
        </div>
      </div>
      {/* <div className="content">
            <p>{props.movie.title}</p>
            <p>{props.movie.overview}</p>
            <p>{props.movie.original_Language}</p>
            <p>{props.movie.release}</p>
            <p>{props.movie.adult ? `true` : `false`}</p>
        </div>
        <div className="content">
            <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
            </span>
            <i className="comment icon"></i>
            3 comments
        </div> 
        </div>
        <div className="five wide column"></div>
        </div>
        </div> */}
    </>
  );
}

export default MovieDetails;
