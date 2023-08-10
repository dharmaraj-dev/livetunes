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
  ARTIST_PROFILE_STATUS,
  IS_ARTIST_PROFILE_SEND,
  ARTIST_IS_APPROVED,
  ARTIST_IS_REJECTED,
  ARTIST_IS_PENDING,
  ARTIST_IS_NOT_SUBMITTED
} from "./types";

import ArtistService from "../services/artist.service";

export const getProfileData = () => (dispatch) => {
  return ArtistService.getProfileData().then(
    (response) => {
       if(response.data.IsSuccess) {
          localStorage.setItem('artistProfileData', JSON.stringify(response.data));
          localStorage.setItem('IsProfileSend', response.data.IsProfileSend);
          localStorage.setItem('is_pending', response.data.is_pending);
          localStorage.setItem('is_not_submitted', response.data.is_not_submitted);
          localStorage.setItem('is_rejection', response.data.is_rejection);
          localStorage.setItem('is_approved', response.data.is_approved);
          dispatch({
            type: GET_ARTIST_PROFILE_DATA,
            payload: response.data,
          });
          dispatch({
            type: GET_ARTIST_PROFILE_DATA_STATUS,
            payload: response.Message,
          });
          dispatch({
            type: IS_ARTIST_PROFILE_SEND,
            payload: response.data.IsProfileSend,
          });
          dispatch({
            type: ARTIST_IS_APPROVED,
            payload: response.data.is_approved,
          });
          dispatch({
            type: ARTIST_IS_REJECTED,
            payload: response.data.is_rejection,
          });
          dispatch({
            type: ARTIST_IS_PENDING,
            payload: response.data.is_pending,
          });
          dispatch({
            type: ARTIST_IS_NOT_SUBMITTED,
            payload: response.data.is_not_submitted,
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

export const setBankDetails = (data) => (dispatch) => {
  return ArtistService.setBankDetails(data).then(
    (response) => {
       if(response.IsSuccess) {
          dispatch({
            type: SET_ARTIST_BANK_DETAILS,
            payload: response,
          });
        }
        else {
          dispatch({
            type: SET_ARTIST_PROFILE_DATA,
            payload: {},
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

export const setPhotoIdProof = (data) => (dispatch) => {
  return ArtistService.setPhotoIdProof(data).then(
    (response) => {
       if(response.IsSuccess) {
          dispatch({
            type: SET_ARTIST_PHOTO_ID_PROOF,
            payload: response,
          });
        }
        else {
          dispatch({
            type: SET_ARTIST_PHOTO_ID_PROOF,
            payload: {},
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

export const setAddressProof = (data) => (dispatch) => {
  return ArtistService.setAddressProof(data).then(
    (response) => {
       if(response.IsSuccess) {
          dispatch({
            type: SET_ARTIST_ADDRESS_PROOF,
            payload: response,
          });
        }
        else {
          dispatch({
            type: SET_ARTIST_ADDRESS_PROOF,
            payload: {},
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

export const setReferences = (data) => (dispatch) => {
  return ArtistService.setReferences(data).then(
    (response) => {
       if(response.IsSuccess) {
          dispatch({
            type: SET_ARTIST_REFERENCES,
            payload: response,
          });
        }
        else {
          dispatch({
            type: SET_ARTIST_REFERENCES,
            payload: {},
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

export const getArtistProofData = (data) => (dispatch) => {
  return ArtistService.getArtistProofData(data).then(
    (response) => {
      console.log(response);
       if(response.data.IsSuccess) {
          localStorage.setItem('artistProofData', JSON.stringify(response.data));
          dispatch({
            type: GET_ARTIST_PROOF_DATA,
            payload: response.data,
          });
        }
        else {
          dispatch({
            type: GET_ARTIST_PROOF_DATA,
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

export const removeArtistAttachment = (data) => (dispatch) => {
  return ArtistService.removeArtistAttachment(data).then(
    (response) => {
      console.log(response);
       if(response.data.IsSuccess) {
          dispatch({
            type: REMOVE_ARTIST_MEDIA,
            payload: response.data,
          });
        }
        else {
          dispatch({
            type: REMOVE_ARTIST_MEDIA,
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

export const submitArtistApplicationTJudge = () => (dispatch) => {
  return ArtistService.submitArtistApplicationTJudge().then(
    (response) => {
      console.log(response);
       if(response.data.IsSuccess) {
          dispatch({
            type: ARTIST_APPLICATION_SUBMIT,
            payload: response.data,
          });
        }
        else {
          dispatch({
            type: ARTIST_APPLICATION_SUBMIT,
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

export const updateMediaDescription = (data) => (dispatch) => {
  return ArtistService.updateMediaDescription(data).then(
    (response) => {
      console.log(response);
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
