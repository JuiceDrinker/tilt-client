import React, { Component } from "react";
import Search from "./../components/Search";
import Recommended from "./../components/Recommended";
import Navbar from "./../components/Navbar";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Search />
        <Recommended />
      </div>
    );
  }
}
