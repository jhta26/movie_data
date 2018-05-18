import React, { Component } from "react";
import GetPopularMovies from "../requests/GetPopularMovies";
import PopularMovieComponent from "./PopularMovieComponent";

const PopularMoviesComponent = ({ movies }) => {
  if (!movies) return null;

  return (
    <div>
      <h2 className="white-text">Popular</h2>
      <div className="PopularMoviesDisplay">
        {movies
          ? movies.map((movie, i) => (
              <PopularMovieComponent info={movie} key={i} />
            ))
          : null}
      </div>
    </div>
  );
};

export default PopularMoviesComponent;
