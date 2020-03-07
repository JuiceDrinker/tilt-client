import React, { Component } from "react";
import { convertSecondsToDisplay } from "./../lib/helpers";

export default class Episodes extends Component {
  state = {
    episodeObj: {},
    runTime: 0
  };

  componentDidMount() {
    const { episodeObj } = this.props;
    const runTime = convertSecondsToDisplay(episodeObj.audio_length_sec);
    this.setState({ episodeObj: episodeObj, runTime: runTime });
  }

  render() {
    return (
      <div>
        <img src={this.state.episodeObj.image} alt="" />
        {this.state.episodeObj.description}
        <br />
        <p>Run Time: {this.state.runTime}</p>
      </div>
    );
  }
}
