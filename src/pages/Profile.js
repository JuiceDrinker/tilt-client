import React, { Component } from "react";
import authService from "../lib/auth-service";

export default class Profile extends Component {
  state = {
    currentUser: {}
  };

  componentDidMount() {
    authService
      .me()
      .then(meObj => {
        this.setState({ currentUser: meObj });
        console.log("this.state", this.state);
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  render() {
    return <div></div>;
  }
}
