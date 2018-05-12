import React, { Component } from "react";

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
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=4d5bf8d10c6b03d87d1ad39ff4d7e296&language=en-US&query=${
        this.state.search
      }&page=1&include_adult=false`
    )
      .then(response => response.json())
      .then(data => this.setState({ result: data }));
  };
  render() {
    console.log(this.state);
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
            {this.state.result ? (
     			<div className="col container s12">
     				<div className ="row s6">
     					
     					 <img
     					 className="col center-align s6"
                         src={`http://image.tmdb.org/t/p/w300/${
                           this.state.result.results[0].poster_path
                         }`}
                       />
     					
     					<div className="col black s6">

     						<h2 className="white-text">{this.state.result.results[0].original_title}</h2>
     						<p className="white-text">release date:{this.state.result.results[0].release_date}</p>
     						<h5 className="white-text">{this.state.result.results[0].overview}</h5>
     						<p className="white-text">{this.state.result.results[0].popularity}</p>
     						<p className="white-text">{this.state.result.results[0].vote_average}</p>
     						<p className="white-text">{this.state.result.results[0].vote_count}</p>
     					</div>
     				</div>
     			</div>
            ) : null}
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
