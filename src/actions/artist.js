import {
  ARTIST_APPLICATION_SUBMIT,
  ARTIST_PROFILE_STATUS,
  ARTIST_IS_REJECTED
} from "./types";

import ArtistService from "../services/artist.service";
import { setArtistIsNotSubmitted, setArtistIsPending, setArtistIsApproved, setArtistRejected, setIsArtistProfileSend } from '../redux/userAuth';
import { setArtistProfileData, setArtistProfileDataStatus, setArtistProofData } from '../redux/artistSlice';
  
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
          dispatch(setArtistProfileData(response.data));
          dispatch(setIsArtistProfileSend(response.data.IsProfileSend));
          dispatch(setArtistIsApproved(response.data.is_approved));
          dispatch(setArtistRejected(response.data.is_rejection));
          dispatch(setArtistIsPending(response.data.is_pending));
          dispatch(setArtistIsNotSubmitted(response.data.is_not_submitted))
        }
        else {
          dispatch(setArtistProfileData([]));
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
        console.log(response);
          dispatch(setArtistProfileData(response));
        }
        else {
          dispatch(setArtistProfileData([]));
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
          dispatch(setArtistProofData(response.data))
        }
        else {
          dispatch(setArtistProofData([]))
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
