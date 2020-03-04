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
}
