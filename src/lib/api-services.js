import axios from "axios";
require("dotenv").config();

class API {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.API_BASE_URL,
      withCredentials: true,
      headers: { "X-ListenAPI-Key": process.env.API_KEY }
    });
  }

  getAllLangs = async () => {
    return await this.api.get("/languages");
  };

  getAllGenres = async () => {
    return await this.api.get("/genres");
  };

  getRandomEpisodeObj = async () => {
    return await this.api.get("/just-listen");
  };

  getSearchResults = async searchQuery => {
    return await this.api.get(`/search/${searchQuery}`);
  };

  getTypeaheadResults = async searchQuery => {
    return await this.api.get(`/typeahead/${searchQuery}`);
  };

  getOnePodcast = async podcastID => {
    return await this.api.get(`podcast/${podcastID}`);
  };

  getOneEpisode = async episodeID => {
    return await this.api.get(`episodes/${episodeID}`);
  };

  getBestPodcast = async searchQuery => {
    return await axios.get(`/best_podcasts/${searchQuery}`);
  };

  getPodcastRecommendation = async id => {
    return await axios.get(`/podcasts/${id}/recommendations`);
  };

  getEpisodesRecommendation = async id => {
    return await axios.get(`/episodes/${id}/recommendations`);
  };
}

const APIservices = new API();

export default APIservices;
