import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import parse from "html-react-parser";

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
          console.log("podcast", podcastObj);
          return (
            <Card>
              <CardImg
                top
                width="100%"
                src={podcastObj.image}
                height="414px"
                alt="Card image cap"
              />
              <CardBody style={{ border: "1px solid black", padding: "20px" }}>
                <CardTitle>
                  {parse(podcastObj.title_highlighted || podcastObj.title)}
                </CardTitle>
                <CardSubtitle>
                  Total episodes: {podcastObj.total_episodes}
                </CardSubtitle>
                <CardText>
                  {parse(
                    podcastObj.description || podcastObj.description_original
                  )}
                </CardText>
                <Link
                  key={`${podcastObj.id}`}
                  to={`/podcastResult/${podcastObj.id}`}
                >
                  <Button>Check it out!</Button>
                </Link>
              </CardBody>
            </Card>
          );
        })}
      </div>
    );
  }
}
