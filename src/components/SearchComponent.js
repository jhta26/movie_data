import React, { Component } from "react";
import GetMovieSearchInfo from "../requests/GetMovieSearchInfo";
import MovieSearchResultComponent from "./MovieSearchResultComponent";

export default class SearchComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={
        search: "",
        result: null
    }
  }

  _handleChange = event => {
    event.preventDefault();
    var search = event.target.value;
    this.setState({ search: search });
  };

  _handleClick = event => {
    event.preventDefault();
    this.props.onSearchForMovies(this.state.search)
    // GetMovieSearchInfo(this.state.search,'http://localhost:8000',null,null).then(data =>
    //   this.setState({ result: data.results })
    // );
  };
  render() {

    return (
      <div className="row">
        <div className="col s12">
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
          <div className="row">
            {this.state.result
              ? this.state.result.map((movie, i) => (
                  <MovieSearchResultComponent info={movie} key={i} />
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}
