import axios from "axios";
require("dotenv").config();

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "https://listen-api.listennotes.com/api/v2",
      headers: {
        get: { "X-ListenAPI-Key": process.env.REACT_APP_API_KEY }
      }
    });
  }

  getAllLangs = () => {
    return this.api.get("/languages");
  };

  getAllGenres = () => {
    return this.api.get("/genres");
  };

  getRandomEpisodeObj = () => {
    return this.api.get("/just_listen");
  };

  getSearchResults = searchQuery => {
    return this.api.get(`/search?q=${searchQuery}`);
  };

  getTypeaheadResults = searchQuery => {
    return this.api.get(`/typeahead/${searchQuery}`);
  };

  getOnePodcast = podcastID => {
    return this.api.get(`podcast/${podcastID}`);
  };

  getOneEpisode = episodeID => {
    return this.api.get(`episodes/${episodeID}`);
  };

  getBestPodcast = searchQuery => {
    return this.api.get(`/best_podcasts/${searchQuery}`);
  };

  getPodcastRecommendation = id => {
    return this.api.get(`/podcasts/${id}/recommendations`);
  };

  getEpisodesRecommendation = id => {
    return this.api.get(`/episodes/${id}/recommendations`);
  };
}

const APIservices = new API();

export default APIservices;
