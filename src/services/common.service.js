import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const getCities = () => {
  return axios.get(API_URL + "City/GetAll", { headers: authHeader() });
};

const getStates = () => {
  return axios.get(API_URL + "State/GetAll", { headers: authHeader() });
};

const getCategories = () => {
  return axios.get(API_URL + "Category/GetAll", { headers: authHeader() });
};

const getGernes = () => {
  return axios.get(API_URL + "Genre/GetAll", { headers: authHeader() });
};

const getLanguages = () => {
  return axios.get(API_URL + "Language/GetAll", { headers: authHeader() });
};

const getEvents = () => {
  return axios.get(API_URL + "Events/GetAll", { headers: authHeader() });
};

const getEventModes = () => {
  return axios.get(API_URL + "EventMode/GetAll", { headers: authHeader() });
};

const getBanks = () => {
  return axios.get(API_URL + "Bank/GetAll", { headers: authHeader() });
};

const getBranches = () => {
  return axios.get(API_URL + "BankBranch/GetAll", { headers: authHeader() });
};

const getIDProofs = () => {
  return axios.get(API_URL + "IdProof/GetAll", { headers: authHeader() });
};

const getAddressProofs = () => {
  return axios.get(API_URL + "AddressProof/GetAll", { headers: authHeader() });
};

const logout = () => {
  return axios
    .post(API_URL + "LogMethods/Logout", {}, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });  
};


export default {
  getCities,
  getStates,
  getCategories,
  getGernes,
  getLanguages,
  getEvents,
  getEventModes,
  getBanks,
  getBranches,
  getIDProofs,
  getAddressProofs,
  logout
};
