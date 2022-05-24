import axios from "axios";

const KEY = "AIzaSyD4IGooFJqtFMJH8Q27cullaHUc3Ap1qLQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});



