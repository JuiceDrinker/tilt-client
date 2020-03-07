import API from "../lib/api-services";

import React, { Component } from "react";

export default class PodcastResult extends Component {
  state = {
    podcastObj: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    API.getOnePodcast(id)
      .then(result => {
        const podcastObj = result.data;
        console.log(podcastObj);
        this.setState({ podcastObj: podcastObj });
      })
      .catch(err => {
        console.log("err :", err);
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.podcastObj.title}</h1>
      </div>
    );
  }
}
