import React, { Component, cloneElement } from "react";
import API from "./../lib/api-services";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { convertSecondsToDisplay } from "./../lib/helpers";
import parse from "html-react-parser";
import listenedEpisodeServices from "./../lib/listenedEpisodes-services";
import authService from "./../lib/auth-service";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
class EpisodeResult extends Component {
  state = {
    id: null,
    episodeObj: {},
    nextEpID: null
  };

  componentDidMount() {
    this.getCurrentEp();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.episodeId !== this.props.episodeId) this.getCurrentEp();
  }

  getCurrentEp = () => {
    let { id } = this.props.match.params;
    if (id === undefined) {
      id = this.props.episodeId;
      console.log("this.state.id :", this.props);
    }
    this.setState((state, props) => {
      return { id: id };
    });
    API.getOneEpisode(id)
      .then(result => {
        const episode = result.data;
        this.setState({ episodeObj: episode });
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  getNextEpID = () => {
    const podcastID = this.state.episodeObj.podcast.id;
    const episodeID = this.state.id;
    let nextEpisodeID = null;
    API.getOnePodcast(podcastID)
      .then(podcastObj => {
        podcastObj.data.episodes.forEach((episode, index) => {
          console.log(episode.id);
          if (episode.id === episodeID) {
            nextEpisodeID = podcastObj.data.episodes[index + 1].id;
          }
        });
        console.log("nextEpisodeID", nextEpisodeID);
        this.handleNext(nextEpisodeID); //ID
      })
      .catch(err => {
        console.log("err :", err);
      });
  };

  handleNext = nextEpID => {
    console.log("nextEpID :", nextEpID); //Undefined
    if (nextEpID) {
      this.getCurrentEp();
      this.props.history.push(`/episode/${nextEpID}`);
    } else return;
  };
  handlePlay = e => {
    const id = this.state.id;
    listenedEpisodeServices
      .getById(id)
      .then(result => {
        if (result.data.length === 0) {
          this.saveToUser();
        } else {
          e.target.currentTime = result.data[0].progress;
        }
      })
      .catch(err => {
        console.log("err", err);
      });
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
        onClickNext={this.getNextEpID}
        onPlay={this.handlePlay}
        onPause={this.updateProgress}
      />
    );
  };

  render() {
    console.log("this.state :", this.state);
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

export default withRouter(EpisodeResult);
