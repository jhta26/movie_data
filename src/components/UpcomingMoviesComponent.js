import React, { Component } from "react";
import GetPopularMovies from "../requests/GetPopularMovies";
import UpcomingMovieDateComponent from "./UpcomingMovieDateComponent";
const UpcomingMoviesComponent = ({ movies, selectedCategory,onShowMovieInfo }) => {
  if (!movies) return null;
  movies.map(
    movie =>
      (movie.release = +movie.release_date
        .substring(5)
        .split("-")
        .join(""))
  );
  let sortedMovies = movies.sort((a, b) => a.release - b.release);
  sortedMovies.length = 12;
  let sortedMoviesObj = {};

  for (let i in sortedMovies) {
    if (!sortedMoviesObj[sortedMovies[i].release_date]) {
      sortedMoviesObj[sortedMovies[i].release_date] = [sortedMovies[i]];
    } else {
      sortedMoviesObj[sortedMovies[i].release_date].push(sortedMovies[i]);
    }
  }

  var result = [];
  for (let i in sortedMoviesObj) {
    var obj = new Object();
    obj[i] = sortedMoviesObj[i];
    result.push(obj);
  }

  return (
    <div>
      <h5 className="white-text">Upcoming</h5>
      <div className="UpcomingMoviesDisplay">
        {result
          ? result.map((movie, i) => (
              <UpcomingMovieDateComponent
                movieDate={Object.keys(movie)[0]}
                movieInfo={Object.values(movie)}
                key={i}
                onShowMovieInfo={onShowMovieInfo}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default UpcomingMoviesComponent;
