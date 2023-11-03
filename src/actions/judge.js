import {
  JUDGE_APPLICATIONS,
  ARTIST_APPLICATION_DATA,
  JUDGE_APPLICATIONS_FEED_LOGS
} from "./types";

import JudgeService from "../services/judge.service";


export const getApplications = () => (dispatch) => {
  return JudgeService.getJudgesApplications().then(
    (response) => {
       if(response.data.IsSuccess) {
          localStorage.setItem('judgeApplications', JSON.stringify(response.data.JPanellst));
          dispatch({
            type: JUDGE_APPLICATIONS,
            payload: response.data.JPanellst,
          });
        }
        else {
          dispatch({
            type: JUDGE_APPLICATIONS,
            payload: [],
          });
        }

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const getArtistProfileForJudge = (applicationId) => (dispatch) => {
  return JudgeService.getArtistProfileForJudge(applicationId).then(
    (response) => {
       if(response.data.IsSuccess) {
          localStorage.setItem('artistApplicationData', JSON.stringify(response.data));
          dispatch({
            type: ARTIST_APPLICATION_DATA,
            payload: response.data,
          });
        }
        else {
          dispatch({
            type: ARTIST_APPLICATION_DATA,
            payload: null,
          });
        }

      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const getArtistApplicationFeedLogs = (applicationId) => (dispatch) => {
  return JudgeService.getArtistApplicationFeedLogs(applicationId).then(
    (response) => {
       if(response.data.IsSuccess) {
          localStorage.setItem('feedLogs', JSON.stringify(response.data.output_data));
          dispatch({
            type: JUDGE_APPLICATIONS_FEED_LOGS,
            payload: response.data.output_data,
          });
        }
        else {
          dispatch({
            type: JUDGE_APPLICATIONS_FEED_LOGS,
            payload: [],
          });
        }
      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};

export const saveArtistReview = (data) => (dispatch) => {
  return JudgeService.saveArtistReview(data).then(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return Promise.reject(error);
    }
  );
};
