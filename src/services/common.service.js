import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const getCities = () => {
  return axios.get(API_URL + "City/GetAll", { headers: authHeader() });
};

export default {
  getCities
};
