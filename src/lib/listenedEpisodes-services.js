import axios from "axios";
require("dotenv").config();

class ListenedEpisode {
  constructor() {
    this.listenedEpisode = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/listenedEpisode`,
      withCredentials: true
    });
  }

  setNewListenedEpisode = episodeID => {
    return this.listenedEpisode.post("/", { episodeID: episodeID });
  };

  setEpisodeProgress = (episodeID, progress) => {
    return this.listenedEpisode.put(`/`, {
      progress: progress,
      id: episodeID
    });
  };
}

const listenedEpisodeServices = new ListenedEpisode();

export default listenedEpisodeServices;
