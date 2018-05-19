///api key: 4d5bf8d10c6b03d87d1ad39ff4d7e296

import React, { Component } from "react";
import SearchComponent from "./components/SearchComponent";
import MovieInfoComponentContainer from "./redux/containers/MovieInfoComponentContainer"
import MainHomePageContainer from "./redux/containers/MainHomePageContainer";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import setupStore from "./redux/setupStore";

const store = setupStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={MainHomePageContainer} />
              <Route exact path="/movieinfo" component={MovieInfoComponentContainer}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
