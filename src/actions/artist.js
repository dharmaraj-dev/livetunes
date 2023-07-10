import {
  GET_ARTIST_PROFILE_DATA,
  GET_ARTIST_PROFILE_DATA_STATUS,
  SET_ARTIST_PROFILE_DATA,
  SET_ARTIST_PROFILE_DATA_STATUS
} from "./types";

import ArtistService from "../services/artist.service";

export const getProfileData = () => (dispatch) => {
  return ArtistService.getProfileData().then(
    (response) => {
       if(response.data.IsSuccess) {
          localStorage.setItem('artistProfileData', JSON.stringify(response.data));
          dispatch({
            type: GET_ARTIST_PROFILE_DATA,
            payload: response.data,
          });
          dispatch({
            type: GET_ARTIST_PROFILE_DATA_STATUS,
            payload: response.Message,
          });
        }
        else {
          dispatch({
            type: GET_ARTIST_PROFILE_DATA,
            payload: {},
          });
          dispatch({
            type: GET_ARTIST_PROFILE_DATA_STATUS,
            payload: response.Message,
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

export const setProfileData = (data) => (dispatch) => {
  return ArtistService.setProfileData(data).then(
    (response) => {
       if(response.IsSuccess) {
          dispatch({
            type: SET_ARTIST_PROFILE_DATA,
            payload: response,
          });
          dispatch({
            type: SET_ARTIST_PROFILE_DATA_STATUS,
            payload: response.Message,
          });
        }
        else {
          dispatch({
            type: SET_ARTIST_PROFILE_DATA,
            payload: {},
          });
          dispatch({
            type: SET_ARTIST_PROFILE_DATA_STATUS,
            payload: response.Message,
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
