import React, { Component } from "react";
import API from "./../lib/api-services";
export default class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToRender: this.props.data
    };
  }

  //
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { data } = this.props;
      this.setState((state, props) => {
        return { dataToRender: data };
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.dataToRender.map(podcastObj => {
          return <img src={podcastObj.image} alt="" width="200" height="200" />;
        })}
      </div>
    );
  }
}
