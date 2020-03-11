import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";

import NavbarComponent from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Index from "./pages/Index";
import PodcastResult from "./pages/PodcastResult";
import EpisodeResult from "./pages/EpisodeResult";
import RandomEpisode from "./pages/RandomEpisode";
import Profile from "./pages/Profile";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  toggleIndex = () => this.setState({ showIndex: true });

  render() {
    return (
      <div className="container">
        <NavbarComponent />

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Index} />
          <PrivateRoute
            exact
            path="/podcastResult/:id"
            component={PodcastResult}
          />
          <PrivateRoute exact path="/episode/:id" component={EpisodeResult} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/randomEpisode" component={RandomEpisode} />
        </Switch>
      </div>
    );
  }
}

export default App;
