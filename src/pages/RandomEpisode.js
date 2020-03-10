import EpisodeResult from "./EpisodeResult";
import React, { Component } from "react";
import APIservices from "../lib/api-services";
import { withRouter, Link, Redirect } from "react-router-dom";

class RandomEpisode extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    this.getRandomEpisodeID();
  }

  getRandomEpisodeID = () => {
    APIservices.getRandomEpisodeObj()
      .then(result => {
        const id = result.data.id;
        this.setState({ id: id });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return this.state.id ? (
      <div>
        <EpisodeResult episodeId={this.state.id}  />
        <button onClick={this.getRandomEpisodeID}>
          Get Another Random Episode
        </button>
      </div>
    ) : null;
  }
}

export default withRouter(RandomEpisode);
