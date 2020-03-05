import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import APIservices from "./../lib/api-services";

class Private extends Component {
  render() {
    return (
      <div>
        <h1>Private Route</h1>
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    );
  }
}

export default withAuth(Private);
