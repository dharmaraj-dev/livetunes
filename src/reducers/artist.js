import {
  GET_ARTIST_PROFILE_DATA,
  GET_ARTIST_PROFILE_DATA_STATUS,
  SET_ARTIST_PROFILE_DATA,
  SET_ARTIST_PROFILE_DATA_STATUS
} from "../actions/types";

const artistProfileData = localStorage.getItem("artistProfileData") != null ? JSON.parse(localStorage.getItem("artistProfileData")) : {};


const initialState = { artistProfileData, artistProfileDataStatus: artistProfileData != {} ? true : false};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTIST_PROFILE_DATA:
      return {
        ...state,
        artistProfileData: payload
      };
    case GET_ARTIST_PROFILE_DATA_STATUS:
      return {
        ...state,
        artistProfileDataStatus: payload
      };
    default:
      return state;
  }
}
