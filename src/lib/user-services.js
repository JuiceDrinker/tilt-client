import axios from "axios";
require("dotenv").config();

class User {
  constructor() {
    this.user = axios.create({
      baseURL: `${process.env.BACKEND_DEV}/user`,
      withCredentials: true
    });
  }

  deleteMe = async () => {
    return await this.user.delete(`/`);
  };
}

const userServices = new User();
module.exports = userServices;
