import axios from "axios";

// Ngrok URL must be updated every 8 hours.
export default axios.create({
  baseURL: "http://5fa48612.ngrok.io"
});
