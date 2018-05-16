import React,{Component} from "react";
import getPopularMovies from "../requests/getPopularMovies";
import PopularMovieComponent from "./PopularMovieComponent";

class PopularMoviesComponent extends React.Component{
  state = {
    search: "",
    result: null
  };
  _handleChange = event => {
    event.preventDefault();
    var search = event.target.value;
    this.setState({ search: search });
  };

  _handleClick = event => {
    event.preventDefault();
    getPopularMovies(this.state.search).then(data =>
      this.setState({ result: data })
    );
  };
  render() {
  	console.log(this.state)
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="autocomplete-input"
                name="search"
                className="autocomplete"
                onChange={this._handleChange}
              />
              <a
                className="waves-effect waves-light btn"
                onClick={this._handleClick}
              >
                search
              </a>
            </div>
          </div>

          <div className="PopularMoviesDisplay">
          	
            {this.state.result
              ? this.state.result.map((movie, i) => (
                  <PopularMovieComponent info={movie} key={i} />
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }

};

export default PopularMoviesComponent
