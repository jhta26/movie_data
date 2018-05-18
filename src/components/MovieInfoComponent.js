import React from "react";

const MovieInfoComponent = ({ movieInfo }) => {
  return (
    <div className="col container s12">
      <div className="row s6">
        <img
          className="col center-align s6"
          src={`http://image.tmdb.org/t/p/w300/${
            this.state.result.results[0].poster_path
          }`}
        />

        <div className="col black s6">
          <h2 className="white-text">
            {this.state.result.results[0].original_title}
          </h2>
          <p className="white-text">
            release date:{this.state.result.results[0].release_date}
          </p>
          <h5 className="white-text">
            {this.state.result.results[0].overview}
          </h5>
          <p className="white-text">
            {this.state.result.results[0].popularity}
          </p>
          <p className="white-text">
            {this.state.result.results[0].vote_average}
          </p>
          <p className="white-text">
            {this.state.result.results[0].vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};
