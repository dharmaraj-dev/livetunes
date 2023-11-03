import {
  ARTIST_APPLICATION_SUBMIT,
  ARTIST_PROFILE_STATUS,
  ARTIST_IS_REJECTED
} from "./types";

import ArtistService from "../services/artist.service";
import { setArtistIsNotSubmitted, setArtistIsPending, setArtistIsApproved, setArtistRejected, setIsArtistProfileSend } from '../redux/userAuth';
import { setArtistProofData } from '../redux/artistSlice';

export const setProfileData = (data) => (dispatch) => {
  return ArtistService.setProfileData(data).then(
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
