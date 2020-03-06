import React, { Component } from "react";
import Search from "./../components/Search";
import Recommended from "./../components/Recommended";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      searchData: {},
      isQueryRecieved: false
    };
  }

  getSearchData = data => {
    this.setState((state, props) => {
      console.log("data", data);
      return { searchData: data, isQueryRecieved: true };
    });
  };

  render() {
    return (
      <div>
        <Search returnData={this.getSearchData} />
        <Recommended />
      </div>
    );
  }
}
