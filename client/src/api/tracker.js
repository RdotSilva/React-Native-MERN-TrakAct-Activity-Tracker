import axios from "axios";

// Ngrok URL must be updated every 8 hours.
export default axios.create({
  baseURL: "http://b19f7548.ngrok.io"
});
