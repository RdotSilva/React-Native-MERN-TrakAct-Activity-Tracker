import axios from "axios";

// Ngrok URL must be updated every 8 hours.
export default axios.create({
  baseURL: "http://adeea7f8.ngrok.io"
});
