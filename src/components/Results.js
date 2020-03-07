import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          return (
            <Link to={`/podcastResult/${podcastObj.id}`}>
              <img src={podcastObj.image} alt="" width="200" height="200" />
            </Link>
          );
        })}
      </div>
    );
  }
}
