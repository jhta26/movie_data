import React from "react";
import UpcomingMovieComponent from "./UpcomingMovieComponent";

const UpcomingMovieDateComponent = ({ movieDate, movieInfo }) => {
  if (!movieInfo) return null;
  let movieData = movieInfo[0];
  return (
    <div className="UpcomingMovieDateComponent">
      <div className="UpcomingMovieDateHeader">
        <h5  >{`${movieDate}`}</h5>
      </div>
      <div className="UpcomingMovieDateMovies">
        {movieData
          ? movieData.map(movie => <UpcomingMovieComponent info={movie} />)
          : null}
      </div>
    </div>
  );
};

export default UpcomingMovieDateComponent;
