import API from "../lib/api-services";

import React, { Component } from "react";
import parse from "html-react-parser";

import Episodes from "./../components/Episodes";

export default class PodcastResult extends Component {
  state = {
    podcastObj: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    API.getOnePodcast(id)
      .then(result => {
        const podcastObj = result.data;
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
        {/* {parse(
          this.state.podcastObj.description
            ? this.state.podcastObj.description
            : "loading"
        )} */}
        {this.state.podcastObj.episodes
          ? this.state.podcastObj.episodes.map(e => {
              return <Episodes episodeObj={e} key={e.id} />;
            })
          : "loading"}
      </div>
    );
  }
}
