import axios from "axios";
require("dotenv").config();

class User(){
    constructor(){
        this.user = axios.create({
            baseURL: process.env.SERVER_BASE_URL,
            withCredentials: true
          });
    }

    deleteMe = async ()  => {
        return await axios.delete(`${SERVER_BASE_URL}`)
    }
}