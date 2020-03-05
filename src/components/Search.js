import React, { Component } from "react";

export default class Seearch extends Component {
    state= {
        
    }
  render() {
    return (
      <div>
        <input
          type="text"
          name="searchBar"
          placeholder="Search for your favourite podcasts"
        />
        <button>Search</button>
      </div>
    );
  }
}
