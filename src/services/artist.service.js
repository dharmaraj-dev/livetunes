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

const setBankDetails = (data) => {
  return axios.post(API_URL + "ArtistBank/SaveABank", data, { headers: authHeader() });
};

const setPhotoIdProof = (data) => {
  return axios.post(API_URL + "ArtistIdProof/SaveAIdProof", data, { headers: authHeader() });
};

const setAddressProof = (data) => {
  return axios.post(API_URL + "ArtistAddProof/SaveAAddProof", data, { headers: authHeader() });
};

const setReferences = (data) => {
  return axios.post(API_URL + "ArtistReference/SaveAReference", data, { headers: authHeader() });
};




export default {
  getProfileData,
  setProfileData,
  setArtistProfilePicture,
  setArtistEventsAttachments,
  setBankDetails,
  setPhotoIdProof,
  setAddressProof,
  setReferences
};
