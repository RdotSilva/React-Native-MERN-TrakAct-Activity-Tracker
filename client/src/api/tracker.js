import axios from "axios";

// Ngrok URL must be updated every 8 hours.
export default axios.create({
  baseURL: "http://051208ae.ngrok.io"
});
