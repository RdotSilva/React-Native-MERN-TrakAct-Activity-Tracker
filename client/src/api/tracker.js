import axios from "axios";
import { AsyncStorage } from "react-native";

// Ngrok URL must be updated every 8 hours.
const instance = axios.create({
  baseURL: "http://f2d4ba9e.ngrok.io"
});

// Automatically set the authorization header if we have a token in async storage
instance.interceptors.request.use(
  // Called automatically each time we make a request
  async config => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // Called when there is an error
  error => {
    return Promise.reject(error);
  }
);

export default instance;
