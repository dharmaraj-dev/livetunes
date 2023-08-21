import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const getCities = () => {
  return axios.get(API_URL + "City/GetAll", { headers: authHeader() });
};

const getStates = () => {
  return axios.get(API_URL + "State/GetAll", { headers: authHeader() });
};

const getCitiesOfState = (stateId) => {
  return axios.get(API_URL + "City/ByCityId/"+stateId, { headers: authHeader() });
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

const getBranchesByBank = (BankId) => {
  return axios.get(API_URL + "BankBranch/ByBankId/"+BankId, { headers: authHeader() });
};

const getIDProofs = () => {
  return axios.get(API_URL + "IdProof/GetAll", { headers: authHeader() });
};

const getAddressProofs = () => {
  return axios.get(API_URL + "AddressProof/GetAll", { headers: authHeader() });
};

const getAllMasters = () => {
  return axios.post(API_URL + "MasterC/GetArtistMasters",{}, { headers: authHeader() }).then((response) => {
      return response;
    });
};

const logout = (token) => {
  console.log(token)
  return axios
    .post(API_URL + "LogMethods/Logout", {}, { headers: { "Authorization": token } })
    .then((response) => {
      return response.data;
    });  
};


export default {
  getCities,
  getStates,
  getCitiesOfState,
  getCategories,
  getGernes,
  getLanguages,
  getEvents,
  getEventModes,
  getBanks,
  getBranchesByBank,
  getIDProofs,
  getAddressProofs,
  getAllMasters,
  logout
};
