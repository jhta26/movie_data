import React from "react";

const PopularMovieComponent = ({ info }) => {
  if (!info || !info.poster_path || !info.original_title) {
    return null;
  }
  let releaseDate = info.release_date.substring(0, 4);
  return (
    <div className="PopularMovieComponent">
      <div className="PopularMovieHeader">
      <img
        className="PopularMoviePoster"
        src={`http://image.tmdb.org/t/p/w92/${info.poster_path}`}
      />

      
        <h5 className="PopularMovieTitle">{info.original_title}</h5>
        </div>
        <div>
        <p>{releaseDate}</p>
        
      </div>
    </div>
  );
};

export default PopularMovieComponent;