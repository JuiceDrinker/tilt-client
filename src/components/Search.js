import React, { Component, cloneElement } from "react";
import SortDropDown from "./../components/SortDropdown";
import API from "./../lib/api-services";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
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
    API.getTypeaheadResults(newVal.toLowerCase())
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
    if (this.state.searchQuery.length === 0) return;
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
    this.setState({ suggestedPodcasts: [], searchQuery: e.target.innerText });
    // this.handleSubmit(e);
    API.getSearchResults(e.target.innerText)
      .then(results => results.data)
      .then(data => {
        this.setQueryResult(data);
      })
      .catch(err => console.log("err", err));
  };

  render() {
    return (
      <div>
        <div className="search-container" width="100%">
          <InputBase
            fullWidth="true"
            id="filled-basic"
            placeholder="Search "
            autoComplete="off"
            type="text"
            name="searchBar"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <SearchIcon onClick={this.handleSubmit} />

          <SortDropDown
            sortState={this.state.sortByDate}
            dropDownHandler={this.dropDownHandler}
          />
          <br />
        </div>
        {this.state.suggestedPodcasts.length === 0 ? null : (
          <div className="dropdown">
            <div className="dropdown-content-search ">
              <ul>
                {this.state.suggestedPodcasts.map((x, i) => {
                  return <li onClick={this.handleSuggestClick}>{x}</li>;
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
