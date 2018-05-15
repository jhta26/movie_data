import React from "react";

const PopularMoviesComponent = ({ popularMovies }) => {
  return (
  	<div className="PopularMoviesComponent">
  		{popularMovies.map((movie,i)=><MovieInfoComponent movieInfo={movie} key={i}/>)}
  	</div>
  	)

};

export default PopularMoviesComponent
