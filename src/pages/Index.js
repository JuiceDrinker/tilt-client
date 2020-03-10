import React, { Component } from "react";
import Search from "./../components/Search";
import Results from "./../components/Results";
import API from "./../lib/api-services";
import { Link } from "react-router-dom";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      searchData: [],
      isQueryRecieved: false
    };
  }

  getSearchData = data => {
    this.setState({ searchData: data.results, isQueryRecieved: true });
  };

  componentDidMount() {
    API.getBestPodcast("")
      .then(result => {
        const data = result.data.podcasts;
        this.setState({ searchData: data });
      })
      .catch(err => {
        console.log("err :", err);
      });
  }



  render() {
    return (
      <div>
        <Search returnData={this.getSearchData} />
        <Link to="/randomEpisode">
          <button> Get Random Episode </button>
        </Link>
        <Results data={this.state.searchData} />
      </div>
    );
  }
}
