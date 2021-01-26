import React from "react";
// import "antd/dist/antd.css";
import "./App.css";
// navigation
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// pages
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  HomePage,
} from "./pages/index.js";  

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
