import React from "react";

const MovieSearchResultComponent = ({ info }) => {
  if (!info || !info.poster_path || !info.original_title) {
    return null;
  }
  let releaseDate = info.release_date.substring(0, 4);
  return (
    <div className="MovieSearchResultComponent">
      <img
        className="MovieSearchResultPoster"
        src={`http://image.tmdb.org/t/p/w92/${info.poster_path}`}
      />

      <div className="MovieSearchResultText">
        <h5 className="">{info.original_title}</h5>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieSearchResultComponent;
