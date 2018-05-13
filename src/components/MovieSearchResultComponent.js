import React from "react";

const MovieSearchResultComponent = ({ info }) => {
  return (
    <div className="col container s12">
      <div className="row s6">
        <img
          className="col center-align s1"
          src={`http://image.tmdb.org/t/p/w92/${info.poster_path}`}
        />

        <div className="col black s6">
          <h4 className="white-text">{info.original_title}</h4>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchResultComponent;
