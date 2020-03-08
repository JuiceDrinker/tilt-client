import React, { Component } from "react";
import API from "./../lib/api-services";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
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

  Player = () => {
    return <AudioPlayer src={this.state.episodeObj.audio} />;
  };
  render() {
    return this.state.episodeObj ? (
      <div>
        <img src={this.state.episodeObj.image} alt="" />
        {this.state.episodeObj.description}
        {this.Player()}
      </div>
    ) : null;
  }
}
