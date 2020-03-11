import React, { Component } from "react";
import API from "./../lib/api-services";
export default class Search extends Component {
  state = {
    searchQuery: "",
    type: "podcast",
    sortByDate: false,
    title: true,
    description: false,
    genres: [],
    suggestedPodcasts: []
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
    API.getTypeaheadResults(newVal)
      .then(results => {
        const suggestedPodcasts = results.data.terms.map(x => x);
        this.setState({ suggestedPodcasts: suggestedPodcasts });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  handleSortByDate = e => {
    const newSortByDate = e.target.value;
    this.setState({ sortByDate: newSortByDate });
  };

  //   handleGenres = e => {}; TODO:

  handleSubmit = e => {
    e.preventDefault();
    const formQuery = this.state.searchQuery
      .replace(" ", "%20")
      .concat(`&type=${this.state.type}`)
      .concat(`&sortbyDate=${this.state.sortByDate ? "1" : "0"}`)
      .concat(`$only_in=
      ${
        this.state.title
          ? "title"
          : "" + this.state.description
          ? "description"
          : ""
      }`);
    console.log("formQuery :", formQuery);
    API.getSearchResults(formQuery)
      .then(results => results.data)
      .then(data => {
        this.setQueryResult(data);
      })
      .catch(err => console.log("err", err));
  };

  dropDownHandler = e => {
    // e.preventDefault();
    if (e.target.innerText === "Relevance")
      this.setState({ sortByDate: false });
    else if (e.target.innerText === "Date") this.setState({ sortByDate: true });
  };
  handleSuggestClick = e => {
    e.preventDefault();
    this.setState({ suggestedPodcasts: [] });
    this.handleSubmit(e);
  };
  render() {
    return (
      <div>
        <input
          autoComplete="off"
          type="text"
          name="searchBar"
          value={this.state.searchQuery}
          placeholder="Search for your favourite podcasts"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Search</button>
        {this.state.suggestedPodcasts.length === 0 ? null : (
          <div className="dropdown">
            <div className="dropdown-content-search ">
              {this.state.suggestedPodcasts.map((x, i) => {
                return (
                  <h1 key={i} onClick={this.handleSuggestClick}>
                    {x}
                  </h1>
                );
              })}
            </div>
          </div>
        )}
        <div className="dropdown">
          <button className="dropbtn">
            {this.state.sortByDate ? "Sort by Date" : "Sort By Relevance"}
          </button>
          <div className="dropdown-content">
            <button onClick={this.dropDownHandler}>Relevance</button>
            <button onClick={this.dropDownHandler}>Date</button>
          </div>
        </div>
      </div>
    );
  }
}
