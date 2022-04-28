import axios from "axios";

const instance = axios.create({
  baseURL: "https://students-api-v1.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;
