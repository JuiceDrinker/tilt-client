import React, { Component, cloneElement } from "react";
import API from "./../lib/api-services";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { convertSecondsToDisplay } from "./../lib/helpers";
import parse from "html-react-parser";
import listenedEpisodeServices from "./../lib/listenedEpisodes-services";
import authService from "./../lib/auth-service";
export default class EpisodeResult extends Component {
  state = {
    id: null,
    episodeObj: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState((state, props) => {
      return { id: id };
    });

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

  handlePlay = e => {
    const id = this.state.id;
    listenedEpisodeServices
      .getById(id)
      .then(result => {
        console.log("result :", result);
        if (result.data.length === 0) this.saveToUser();
        else {
          console.log("result :", result);
          const progress = result.data.progress;
          e.audio.currentTime = progress;
        }
      })
      .catch(err => {});
  };
  saveToUser = () => {
    listenedEpisodeServices.setNewListenedEpisode(this.state.id);
  };

  updateProgress = e => {
    listenedEpisodeServices.setEpisodeProgress(
      this.state.id,
      e.target.currentTime
    );
  };

  Player = () => {
    return (
      <AudioPlayer
        src={this.state.episodeObj.audio}
        showSkipControls
        onPlay={this.handlePlay}
        onPause={this.updateProgress}
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
