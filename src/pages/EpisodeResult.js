import React, { Component } from "react";
import API from "./../lib/api-services";
export default class EpisodeResult extends Component {
  state = {
    id: null,
    episodeObj: {}
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    API.getOneEpisode(id)
      .then(result => {
        const episode = result.data;
        this.setState({ episodeObj: episode });
        console.log("episode", episode.audio);
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  render() {
    return this.state.episodeObj ? (
      <div>
        <img src={this.state.episodeObj.image} alt="" />
        {this.state.episodeObj.description}
        <audio controls>
          <source
            src={this.state.episodeObj.audio ? this.state.episodeObj.audio : ""}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    ) : null;
  }
}
