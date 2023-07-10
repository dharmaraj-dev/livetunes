import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const getProfileData = () => {
  return axios.post(API_URL + "ArtistProfile/GetArtistProfile", {}, { headers: authHeader() });
};

const setProfileData = (data) => {
  return axios.post(API_URL + "ArtistProfile/SaveAProfile", data, { headers: authHeader() });
};

const setArtistProfilePicture = (data) => {
  return axios.post(API_URL + "LTMedia/uploadp-image", data, { headers: authHeader() });
};

const setArtistEventsAttachments = (data) => {
  return axios.post(API_URL + "LTMedia/upload-files", data, { headers: authHeader() });
};

const setArtistBank = (data) => {
  return axios.post(API_URL + "ArtistBank/SaveABank", data, { headers: authHeader() });
};




export default {
  getProfileData,
  setProfileData,
  setArtistProfilePicture,
  setArtistEventsAttachments,
  setArtistBank
};
