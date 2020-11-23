import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MovieObj from "./MovieObj";
import Rank from "./Rank";
import Video from "../video/video.mp4";

function MoviesContainer(props) {
  let [searchTerm, setSearchTerm] = useState("");

  let searchedArr = props.movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const movieSearchedArr = searchedArr.map((movie) => (
    <MovieObj key={movie.id} movie={movie} />
  ));

  const rankArray = props.movies.slice(35, 45);
  const rankArr = rankArray.map((movie) => (
    <Rank key={movie.id} movie={movie} />
  ));

  return (
    <>
      <div className="ui grid">
        <div className="three wide column search-bar"></div>
        <div className="ten wide column">
          <div className="ui fluid icon input search-bar">
            <input
              type="text"
              placeholder="search"
              onChange={handleSearch}
              value={searchTerm}
            />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="three wide column search-bar">
          {/* <div className="ui button">login/signup</div> */}
        </div>
      </div>

      <div className="ui celled grid">
        {/* <div className="one wide column"></div> */}
        <div className="one wide column"></div>
        <div className="eleven wide column movie-display">
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%,-50%)",
              zIndex: "-1",
            }}
          >
            <source src={Video} type="video/mp4" />
          </video>
          <div className="ui six cards">{movieSearchedArr}</div>
        </div>
        <div className="three wide column">
          <div className="ui divided items">{rankArr}</div>
        </div>
        <div className="one wide column"></div>
        {/* <div className="one wide column"></div> */}
      </div>
    </>
  );
}

const mapStateToProps = (gState) => {
  return {
    movies: gState.moviesInfo.movies,
  };
};

export default connect(mapStateToProps)(MoviesContainer);
