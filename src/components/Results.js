import React, { Component } from "react";
import API from './../lib/api-services'
export default class Recommended extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: {}
    };
  }

  componentDidMount() {
    const { data } = this.props;
    this.setState((state, props) => {
      return { searchQuery: data };
    });
  }

  render() {
    return <div></div>;
  }
}
