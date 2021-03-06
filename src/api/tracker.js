import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  // Change the Base URL according to URL generated by ngrok
  baseURL: "http://02ba0c182ecc.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
