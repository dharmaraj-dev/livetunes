import {
  GET_ARTIST_PROFILE_DATA,
  GET_ARTIST_PROFILE_DATA_STATUS,
  SET_ARTIST_PROFILE_DATA,
  SET_ARTIST_PROFILE_DATA_STATUS,
  SET_ARTIST_BANK_DETAILS,
  SET_ARTIST_PHOTO_ID_PROOF,
  SET_ARTIST_ADDRESS_PROOF,
  SET_ARTIST_REFERENCES,
  GET_ARTIST_PROOF_DATA,
  REMOVE_ARTIST_MEDIA,
  ARTIST_APPLICATION_SUBMIT,
  ARTIST_RESET
} from "../actions/types";

const artistProfileData = localStorage.getItem("artistProfileData") != null ? JSON.parse(localStorage.getItem("artistProfileData")) : {};
const artistProofData = localStorage.getItem("artistProofData") != null ? JSON.parse(localStorage.getItem("artistProofData")) : {};

const initialState = { artistProfileData, artistProfileDataStatus: artistProfileData != {} ? true : false, artistProofData};

const resetState = {
  artistProfileDataStatus: false,
  artistProfileData: {},
  artistProfileData: {}
}
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
    case GET_ARTIST_PROOF_DATA:
      return {
        ...state,
        artistProofData: payload
      };
    case ARTIST_APPLICATION_SUBMIT:
      return {
        ...state,
        artistApplicationStatus: payload
      };
    case REMOVE_ARTIST_MEDIA:
      return {
        ...state,
        removeArtistMedia: payload
      };
    // case ARTIST_RESET:
    //   return {
    //     ...resetState,
    //   };
    default:
      return state;
  }
}
