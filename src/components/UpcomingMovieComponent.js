import React from "react";
import {Link} from "react-router-dom"

const UpcomingMovieComponent = ({ info,onShowMovieInfo }) => {
  if (!info || !info.poster_path || !info.original_title) {
    return null;
  }
  let releaseDate = info.release_date;
   let _handleShowMovieInfo = event =>{
    var target = event.target;
        event.preventDefault() 
        onShowMovieInfo(info);
  }
  return (
    <div className="PopularMovieComponent">
      <div className="PopularMovieHeader">
        <img
          className="PopularMoviePoster"
          src={`http://image.tmdb.org/t/p/w92/${info.poster_path}`}
        />
          <div className="PopularMovieDetails">
        <h5 className="PopularMovieTitle">{info.original_title}</h5>
        <p>{releaseDate}</p>
        <a className="waves-effect waves-light btn" name="nowPlaying" value="nowPlaying" onClick={_handleShowMovieInfo}><Link to={"/movieinfo"} className="black-text" >
              Data
            </Link></a>
        </div>
      </div>
     
    </div>
  );
};

export default UpcomingMovieComponent;
