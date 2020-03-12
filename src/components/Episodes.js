import React, { Component } from "react";
import { convertSecondsToDisplay } from "./../lib/helpers";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

export default class Episodes extends Component {
  state = {
    episodeObj: {},
    runTime: 0
  };

  componentDidMount() {
    const { episodeObj } = this.props;
    const runTime = convertSecondsToDisplay(episodeObj.audio_length_sec);
    this.setState({ episodeObj: episodeObj, runTime: runTime });
  }

  render() {
    return this.state.episodeObj ? (
      <div>
        <Link to={`/episode/${this.state.episodeObj.id}`}>
          <Card className="shadow margin-top">
            <CardActionArea>
              <CardMedia title={this.state.runTime || null}>
                <img
                  src={this.state.episodeObj.image}
                  height="300"
                  width="300"
                  alt=""
                  srcset=""
                  className="card-image"
                />
              </CardMedia>
              <CardContent>
                {parse(
                  this.state.episodeObj.description
                    ? this.state.episodeObj.description
                    : "loading"
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    ) : null;
  }
}
