import React from "react";

const UpcomingMovieComponent = ({ info }) => {
  if (!info || !info.poster_path || !info.original_title) {
    return null;
  }
  let releaseDate = info.release_date;
  return (
    <div className="UpcomingMovieComponent">
      <div className="UpcomingMovieHeader">
        <img
          className="UpcomingMoviePoster"
          src={`http://image.tmdb.org/t/p/w92/${info.poster_path}`}
        />

        <h5 className="UpcomingMovieTitle">{info.original_title}</h5>
      </div>
      <div>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default UpcomingMovieComponent;
