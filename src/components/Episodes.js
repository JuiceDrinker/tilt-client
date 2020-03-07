import React, { Component } from "react";
import { convertSecondsToDisplay } from "./../lib/helpers";
import { Link } from "react-router-dom";
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
    return this.state.episodeObj ? (
      <div>
        <Link to={`/episode/${this.state.episodeObj.id}`}>
          <img src={this.state.episodeObj.image} alt="" />
        </Link>
        {this.state.episodeObj.description}
        <br />
        <p>Run Time: {this.state.runTime}</p>
      </div>
    ) : null;
  }
}
