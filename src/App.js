import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Nav from "./comp/Nav";
import Home from "./comp/Home";
import About from "./comp/About";
import Portfolio from "./comp/Portfolio";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="main-wrapper">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>

          <Switch>
            <Route
              exact
              path="/about"
              component={About}
            ></Route>
          </Switch>
          <Switch>
            <Route
              exact
              path="/portfolio"
              component={Portfolio}
            ></Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
