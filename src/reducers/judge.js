import {
  JUDGE_APPLICATIONS,
  ARTIST_APPLICATION_DATA,
  JUDGE_APPLICATIONS_FEED_LOGS
} from "../actions/types";



const judgeApplications = localStorage.getItem('judgeApplications') != null ? JSON.parse(localStorage.getItem('judgeApplications')) : [];
const artistApplicationData = localStorage.getItem('artistApplicationData') != null ? JSON.parse(localStorage.getItem('artistApplicationData')) : null;
const feedLogs = localStorage.getItem('feedLogs') != null ? JSON.parse(localStorage.getItem('feedLogs')) : null;

const initialState = {
  applications: judgeApplications,
  artistApplicationData,
  feedLogs
}


export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case JUDGE_APPLICATIONS:
      return {
        ...state,
         applications: payload,
      };
    case ARTIST_APPLICATION_DATA:
      return {
        ...state,
         artistApplicationData: payload,
      };
    case JUDGE_APPLICATIONS_FEED_LOGS:
      return {
        ...state,
         feedLogs: payload,
      };
    default:
      return state;
  }
}
