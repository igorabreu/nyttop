import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "./components/templates/Home";
import "./components/_settings/base.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/nyttop" component={Home} />
          <Redirect from="/" to="/nyttop" />
        </Switch>
      </Router>
    );
  }
}

export default App;
