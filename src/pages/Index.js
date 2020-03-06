import React, { Component } from "react";
import Search from "./../components/Search";
import Results from "./../components/Results";
import API from "./../lib/api-services";
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      searchData: {},
      isQueryRecieved: false
    };
  }

  getSearchData = data => {
    this.setState({ searchData: data.results, isQueryRecieved: true });
  };
  componentDidMount() {
    API.getBestPodcast("")
      .then(result => {
        const data = result.data;
        this.setState({ searchData: data });
      })
      .catch(err => {});
  }

  render() {
    return (
      <div>
        <Search returnData={this.getSearchData} />
        <Results data={this.state.searchData} />
      </div>
    );
  }
}
