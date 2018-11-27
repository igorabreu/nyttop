import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./components/templates/Home";
import SingleArticle from "./components/templates/SingleArticle";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/nyttop" component={Home} />
          <Route path="/about" component={SingleArticle} />
          <Redirect from="/" to="/nyttop" />
        </Switch>
      </Router>
    );
  }
}

export default App;
