import React, { Component } from "react";
import API from "./../lib/api-services";
export default class Search extends Component {
  state = {
    searchQuery: "",
    type: "podcast",
    sortByDate: false,
    type: ""
    // includedGenres: [23 ,62 ,34],
  };

  setQueryResult = data => {
    const { returnData } = this.props;
    returnData(data);
  };

  handleChange = e => {
    const newVal = e.target.value;
    this.setState((state, props) => {
      return { searchQuery: newVal };
    });
  };

  handleSortByDate = e => {
    const newSortByDate = e.target.value;
    this.setState({ sortByDate: newSortByDate });
  };

  //   handleGenres = e => {};

  handleSubmit = e => {
    e.preventDefault();
    const formQuery = this.state.searchQuery
      .replace(" ", "%20")
      .concat(`&type=${this.state.type}`);
    API.getSearchResults(formQuery)
      .then(results => results.data)
      .then(data => {
        this.setQueryResult(data);
      })
      .catch(err => console.log("err", err));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="searchBar"
          value={this.state.searchQuery}
          placeholder="Search for your favourite podcasts"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}
