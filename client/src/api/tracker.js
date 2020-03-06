import axios from "axios";
import { AsyncStorage } from "react-native";

// Ngrok URL must be updated every 8 hours.
const instance = axios.create({
  baseURL: "http://2d8143af.ngrok.io"
});

export default instance;
