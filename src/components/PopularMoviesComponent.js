import React, { Component } from "react";
import GetPopularMovies from "../requests/GetPopularMovies";
import PopularMovieComponent from "./PopularMovieComponent";

const PopularMoviesComponent = ({
  movies,
  selectedCategory,
  onShowMovieInfo
}) => {
  if (!movies) return null;
  return (
    <div>
      <div>
        <h5 className="white-text">Popular</h5>
        <div className="PopularMoviesDisplay">
          {movies
            ? movies.map((movie, i) => (
                <PopularMovieComponent
                  info={movie}
                  key={i}
                  onShowMovieInfo={onShowMovieInfo}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default PopularMoviesComponent;
