import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Index from "./pages/Index";
import PodcastResult from "./pages/PodcastResult";
import EpisodeResult from "./pages/EpisodeResult";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  toggleIndex = () => this.setState({ showIndex: true });

  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Index} />
          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute
            exact
            path="/podcastResult/:id"
            component={PodcastResult}
          />
          <PrivateRoute
            exact
            path="/podcastResult/"
            component={EpisodeResult}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
