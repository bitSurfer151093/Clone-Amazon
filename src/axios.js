import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-764d8.cloudfunctions.net/apicd",
  //"http://127.0.0.1:5001/clone-764d8/us-central1/api", //The API (cloud function) URL
});

export default instance;
