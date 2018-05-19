import React from "react";

const MainHomePageToolbarComponent = ({onShowCategory}) => {
	  var _handleShowCategory = event => {
	      var target = event.target;
	      event.preventDefault()
	      
	      onShowCategory(target.getAttribute("value"));
	  };

  return (
    <div className="MainHomePageToolbarComponent">
      <a className="waves-effect waves-light btn" name="nowPlaying" value="nowPlaying" onClick={_handleShowCategory}>Now Playing</a>
      <a className="waves-effect waves-light btn" name="upcoming" value="upcoming" onClick={_handleShowCategory}>Upcoming</a>
      <a className="waves-effect waves-light btn" name="popular" value="popular" onClick={_handleShowCategory}>Popular</a>
    </div>
  );
};

export default MainHomePageToolbarComponent
