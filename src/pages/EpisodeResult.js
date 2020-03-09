import React, { Component } from "react";
import API from "./../lib/api-services";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { convertSecondsToDisplay } from "./../lib/helpers";
import parse from "html-react-parser";
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
  runTime = e => {
    console.log("currentTIme", e);
  };

  Player = () => {
    return (
      <AudioPlayer
        src={this.state.episodeObj.audio}
        showSkipControls
        onPause={this.runTime}
      />
    );
  };

  render() {
    return this.state.episodeObj ? (
      <div>
        <img src={this.state.episodeObj.image} alt="" />
        <br />
        {convertSecondsToDisplay(this.state.episodeObj.audio_length_sec)}
        {parse(
          this.state.episodeObj.description
            ? this.state.episodeObj.description
            : "loading"
        )}
        {this.Player()}
      </div>
    ) : null;
  }
}
