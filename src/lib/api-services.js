import axios from "axios";
require("dotenv").config();

class API {
  constructor() {
    APIkey = process.env.API_KEY;
    headers = {
      "X-ListenAPI-Key": "APIKey"
    };
    BASE_URL = "https://listen-api.listennotes.com/api/v2";
  }

  getAllLangs = async () => {
    return await axios.get(BASE_URL + "/languages");
  };

  getAllGenres = async () => {
    return await axios.get(BASE_URL + "/genres");
  };

  getRandomEpisodeObj = async () => {
    return await axios.get(BASE_URL + "/just-listen");
  };

  getSearchResults = async searchQuery => {
    return await axios.get(BASE_URL + "/search/" + searchQuery);
  };

  getTypeaheadResults = async searchQuery => {
    return await axios.get(BASE_URL + "/typeahead/" + searchQuery);
  };

  getOnePodcast = async podcastID => {
    return await axios.get(BASE_URL + `podcast/${podcastID}`);
  };

  getOneEpisode = async episodeID => {
    return await axios.get(BASE_URL + `episodes/${episodeID}`);
  };

  getBestPodcast = async searchQuery => {
    return await axios.get(BASE_URL + "/best_podcasts/" + searchQuery);
  };

  getPodcastRecommendation = async id => {
    return await axios.get(BASE_URL + `/podcasts/${id}/recommendations`);
  };

  getEpisodesRecommendation = async id => {
    return await axios.get(BASE_URL + `/episodes/${id}/recommendations`);
  };
}
