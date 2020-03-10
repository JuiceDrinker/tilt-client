import EpisodeResult from "./EpisodeResult";
import React, { Component } from "react";
import APIservices from "../lib/api-services";
import { withRouter } from "react-router-dom";

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
        console.log("result.data :", result.data);
        this.setState({ id: id });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return this.state.id ? (
      <div>
        <EpisodeResult episodeId={this.state.id} />
        <button>Get another random Episode</button>
      </div>
    ) : null;
  }
}

export default withRouter(RandomEpisode);
