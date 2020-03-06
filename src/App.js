import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Index from "./pages/Index";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showResults: false
    };
  }

  componentDidMount() {
    this.setState({ showIndex: true });
  }

  toggleIndex = () => this.setState({ showIndex: true });

  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          showIndex ? <PrivateRoute exact path="/" component={Index} /> : null
          <PrivateRoute exact path="/private" component={Private} />
        </Switch>
      </div>
    );
  }
}

export default App;
