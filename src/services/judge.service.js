import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const getJudgesApplications = () => {
  return axios.post(API_URL + "JudgeProfile/GetJudgeApplications", {}, { headers: authHeader() });
};

const getArtistProfileForJudge = (JPanelId) => {
  return axios.post(API_URL + "JudgeProfile/GetArtistProfile", {"JPanelId": JPanelId}, { headers: authHeader() });
};

const getArtistApplicationFeedLogs = () => {
  return axios.get(API_URL + "FeedLogM/GetAll", { headers: authHeader() });
};

const saveArtistReview = (data) => {
  return axios.post(API_URL + "JudgeProfile/UpdateJPanelStatus",data, { headers: authHeader() });
};

export default {
  getJudgesApplications,
  getArtistProfileForJudge,
  getArtistApplicationFeedLogs,
  saveArtistReview
};
