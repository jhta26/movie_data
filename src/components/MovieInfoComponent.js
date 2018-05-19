import React from "react";
import {Link} from "react-router-dom"

const MovieInfoComponent = ({ selectedMovie }) => {

  return (
    <div className="col container s12">
      <div className="row s6">
        <img
          className="col center-align s6"
          src={`http://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`
          }
        />

        <div className="col black s5">
          <h2 className="white-text">
            {selectedMovie.original_title}
          </h2>
          <h5 className="white-text">Release Date</h5>
          <p className="white-text">
            {selectedMovie.release_date}
          </p>
          <h5 className="white-text">Overview</h5>
          <p className="white-text">
            {selectedMovie.overview}
          </p>
          <h5 className="white-text">Popularity</h5>
          <p className="white-text">
            {selectedMovie.popularity}
          </p>
          <h5 className="white-text">Vote Average</h5>
          <p className="white-text">
            {selectedMovie.vote_average}
          </p>
        
        </div>
        <div className ="col black s1">
        <Link to={"/"} className="white-text">
              Back
            </Link>
        </div>
      </div>
    </div>
  );
};
export default MovieInfoComponent