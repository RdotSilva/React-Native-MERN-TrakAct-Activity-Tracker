import axios from "axios";
import { AsyncStorage } from "react-native";

// Ngrok URL must be updated every 8 hours.
const instance = axios.create({
  baseURL: "http://2d8143af.ngrok.io"
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  error => {
    return Promise.reject(error);
  }
);

export default instance;
