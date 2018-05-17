import React, { Component } from "react";
import GetPopularMovies from "../requests/GetPopularMovies";
import PopularMovieComponent from "./PopularMovieComponent";

const PopularMoviesComponent = ({ movies }) => {
  if (!movies) return null;

  return (
    <div className="PopularMoviesDisplay">
      {movies
        ? movies.map((movie, i) => (
            <PopularMovieComponent info={movie} key={i} />
          ))
        : null}
    </div>
  );
};

export default PopularMoviesComponent;
