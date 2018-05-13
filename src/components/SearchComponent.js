import React, { Component } from "react";
import getMovieSearchInfo from "../requests/getMovieSearchInfo"
import MovieSearchResultComponent from './MovieSearchResultComponent'



export default class SearchComponent extends React.Component {
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
      getMovieSearchInfo(this.state.search)
      .then(data => this.setState({ result: data }));
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
            {this.state.result?this.state.result.map(movie=><MovieSearchResultComponent info={movie}/> ):null
             
            }
          </div>
        </div>
      </div>
    );
  }
}

// <div className="col">
//      <div className="row">

//                 <img
//                src={`http://image.tmdb.org/t/p/w300/${
//                  this.state.result.results[0].backdrop_path
//                }`}
//              />
//      </div>
//        <div class="row s12 m6">
//          <div class="row">
//            <div class="col card-image">
//            <img
//                src={`http://image.tmdb.org/t/p/w300/${
//                  this.state.result.results[0].poster_path
//                }`}
//              />

//              <span class="card-title">
//                {this.state.result.results[0].original_title}
//              </span>
//            </div>
//            <div class="col card-content">
//              <p>{this.state.result.results[0].overview}</p>
//            </div>
//            <div class="card-action">
//              <a href="#">This is a link</a>
//            </div>
//          </div>
//        </div>
//      </div>
