import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
          return (
            <Link
              key={`${podcastObj.id}`}
              to={`/podcastResult/${podcastObj.id}`}
            >
              <Card border-bottom={1} box-shadow={1} className="shadow">
                <CardActionArea>
                  <CardMedia
                    title={parse(
                      podcastObj.title_highlighted || podcastObj.title
                    )}
                  >
                    <img
                      src={podcastObj.image}
                      height="300"
                      width="300"
                      alt=""
                      srcset=""
                      className="card-image"
                    />
                  </CardMedia>
                  <CardContent>
                    {parse(
                      podcastObj.description.substring(0, 200).concat("...") ||
                        podcastObj.description_original
                          .substring(0, 200)
                          .concat("...")
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </div>
    );
  }
}
