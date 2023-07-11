import {
  GET_ARTIST_PROFILE_DATA,
  GET_ARTIST_PROFILE_DATA_STATUS,
  SET_ARTIST_PROFILE_DATA,
  SET_ARTIST_PROFILE_DATA_STATUS,
  SET_ARTIST_BANK_DETAILS,
  SET_ARTIST_PHOTO_ID_PROOF,
  SET_ARTIST_ADDRESS_PROOF,
  SET_ARTIST_REFERENCES
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
    case SET_ARTIST_BANK_DETAILS:
      return {
        ...state,
        artistBankDetails: payload
      };
    case SET_ARTIST_PHOTO_ID_PROOF:
      return {
        ...state,
        artistPhotoProof: payload
      };
    case SET_ARTIST_ADDRESS_PROOF:
      return {
        ...state,
        artistAddressProof: payload
      };
    case SET_ARTIST_REFERENCES:
      return {
        ...state,
        artistReferences: payload
      };
    default:
      return state;
  }
}
