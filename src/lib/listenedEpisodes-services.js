import axios from "axios";
require("dotenv").config();

class ListenedEpisode {
  constructor() {
    this.listenedEpisode = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_DEV}/listenedEpisode`,
      withCredentials: true
    });
  }

  setNewListenedEpisode = async episodeID => {
    return await this.listenedEpisode.post("/", { episodeID: episodeID });
  };

  setEpisodeProgress = async (episodeID, progress) => {
    return await this.listenedEpisode.put(`/${episodeID}`, {
      progress: progress
    });
  };
}

const listenedEpisodeServices = new ListenedEpisode();

export default listenedEpisodeServices;
