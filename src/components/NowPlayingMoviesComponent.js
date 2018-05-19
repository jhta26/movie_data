import React, { Component } from "react";
import GetPopularMovies from "../requests/GetPopularMovies";
import NowPlayingMovieComponent from "./NowPlayingMovieComponent";

const NowPlayingMoviesComponent = ({ movies, selectedCategory,onShowMovieInfo }) => {
  if (!movies) return null;
  console.log(onShowMovieInfo)
  return (
    <div>
      <div>
        <h5 className="white-text">Now Playing</h5>
        <div className="PopularMoviesDisplay">
          {movies
            ? movies.map((movie, i) => (
                <NowPlayingMovieComponent info={movie} key={i} onShowMovieInfo={onShowMovieInfo} />
              ))
            : null}
        </div>
      </div>):null}
    </div>
  );
};

export default NowPlayingMoviesComponent;
