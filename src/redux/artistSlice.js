import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
import { setArtistIsNotSubmitted, setArtistRejected, setArtistIsPending, setArtistIsApproved } from "./userAuth";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const artistProofData = localStorage.getItem("artistProofData") != null ? JSON.parse(localStorage.getItem("artistProofData")) : [];
const artistDetails = localStorage.getItem("artistDetails") != null ? JSON.parse(localStorage.getItem("artistDetails")) : [];

const slice = createSlice({
  name: 'artist',
  initialState: {
    artistProofData,
    artistDetails,
    artistDetailsLoading: true,
    artistDetailsError: false,
    artistSlotsloading: false,
    artistSlotsAddUpdateLoading: false,
    artistSlotsError: false,
    artistSlots: [],
    artistApplicationQuotes: [],
    artistApplicationQuizes: [],
    artistApplicationStatusQuotesLoading: false
  },
  reducers: {
    setArtistProofData: (state, action) => {
      state.artistProofData = action.payload;
    },
    startArtistDetailsLoading: state => {
      state.artistDetailsLoading = true;
    },
    hasArtistDetailsError: (state, action) => {
      state.artistDetailsError = action.payload;
      state.artistDetailsLoading = false;
    },
    setArtistDetailsData: (state, action) => {
      if(action.payload.IsSuccess) {
        state.artistDetails = action.payload;
        localStorage.setItem('artistDetails',JSON.stringify(action.payload));
        state.artistDetailsLoading = false;
      } else {
        state.artistDetails = null;
        state.artistDetailsError = "error";
        state.artistDetailsLoading = false;
      }
      
    },
    startArtistsSlotsLoading: state => {
      state.artistSlotsloading = true;
      state.error = false;
    },
    startAddUpdateLoading: state => {
      state.artistSlotsAddUpdateLoading = true;
      state.artistSlotsloading = false;
      state.error = false;
    },
    hasArtistSlotsError: (state, action) => {
      state.artistSlotsError = action.payload;
      state.artistSlotsloading = false;
      state.artistSlotsAddUpdateLoading = false;
    },
    getSlotsSuccess: (state, action) => {
      if(action.payload.IsSuccess) {
        state.artistSlots = action.payload.output_data;
        state.artistSlotsloading = false;
        state.artistSlotsError = false;
      } else {
        state.artistSlots = [];
        state.artistSlotsloading = false;
        state.artistSlotsError = false;
      }      
    },
    addSlotsSuccess: (state, action) => {
      if(action.payload.IsSuccess) {
        state.artistSlots = action.payload.slot_data;
        state.artistSlotsAddUpdateLoading = false;
        state.artistSlotsError = false;
      } else {
        state.artistSlotsAddUpdateLoading = false;
        state.artistSlotsError = false;
      }      
    },
    updateSlotsSuccess: (state, action) => {
      if(action.payload.IsSuccess) {
        state.artistSlots = action.payload.slot_data;
        state.artistSlotsAddUpdateLoading = false;
        state.artistSlotsError = false;
      } else {
        state.artistSlotsAddUpdateLoading = false;
        state.artistSlotsError = false;
      }      
    },
    startArtistApplicationStatusQuotesLoading: (state, action) => {
      state.artistApplicationStatusQuotesLoading = true;    
    },
    setArtistApplicationStateQuotes: (state, action) => {
      state.artistApplicationQuotes = action.payload;
      state.artistApplicationStatusQuotesLoading = false;  
    },
    setArtistApplicationStateQuizes: (state, action) => {
      state.artistApplicationQuizes = action.payload;
    }
  }
});

export default slice.reducer


export const { 
  setArtistPhotoIdProof,
  setArtistProofData,
  startArtistDetailsLoading,
  hasArtistDetailsError,
  setArtistDetailsData,
  startArtistsSlotsLoading,
  startAddUpdateLoading,
  hasArtistSlotsError,
  getSlotsSuccess,
  addSlotsSuccess,
  updateSlotsSuccess,
  startArtistApplicationStatusQuotesLoading,
  setArtistApplicationStateQuotes,
  setArtistApplicationStateQuizes
} = slice.actions;

export const fetchArtistDetails = (artistId,userId) => async dispatch => {
  dispatch(startArtistDetailsLoading());
  try {
    await axios
      .get(API_URL + `ArtistProfile/GetArtistProfileNew/${artistId}/${userId}` , {headers:authHeader()})
      .then(response => dispatch(setArtistDetailsData(response.data)));
  } catch (e) {
   dispatch(hasArtistDetailsError(e.message))
  }
};

export const getArtistDetails = () => async dispatch => {
  dispatch(startArtistDetailsLoading());
  try {
   return await axios
      .post(API_URL + `ArtistProfile/GetArtistProfile` ,{}, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          dispatch(setArtistIsNotSubmitted(response.data.is_not_submitted));
          dispatch(setArtistRejected(response.data.is_rejection));
          dispatch(setArtistIsPending(response.data.is_pending));
          dispatch(setArtistIsApproved(response.data.is_approved));
        }
        dispatch(setArtistDetailsData(response.data));
        return response;
      });
  } catch (e) {
   dispatch(hasArtistDetailsError(e.message))
  }
};

export const getSlots = (artistId) => async dispatch => {
  dispatch(startArtistsSlotsLoading());
  try {
    await axios
      .get(API_URL + `ASlot/ByArtistId/${artistId}`,{headers:authHeader()})
      .then(response => dispatch(getSlotsSuccess(response.data)));
  } catch (e) {
   dispatch(hasArtistSlotsError(e.message))
  }
};

export const addArtistSlot = (data) => async dispatch => {
  dispatch(startAddUpdateLoading());
  try {
    await axios
      .post(API_URL + `ASlot/Insert`, data, {headers:authHeader()})
      .then(response => dispatch(addSlotsSuccess(response.data)));
  } catch (e) {
   dispatch(hasArtistSlotsError(e.message))
  }
};

export const updateArtistSlot = (data) => async dispatch => {
  dispatch(startAddUpdateLoading());
  try {
    await axios
      .post(API_URL + `ASlot/Update`, data, {headers:authHeader()})
      .then(response => dispatch(updateSlotsSuccess(response.data)));
  } catch (e) {
   dispatch(hasArtistSlotsError(e.message))
  }
};

export const getArtistsApplicationStatusQuotes = (data) => async dispatch => {
  dispatch(startArtistApplicationStatusQuotesLoading());
  try {
    await axios
      .get(API_URL + `Quotes/GetAll`, {headers:authHeader()})
      .then(response => dispatch(setArtistApplicationStateQuotes(response.data.output_data)));
  } catch (e) {
  }
};

export const getArtistsApplicationStatusQuizes  = (data) => async dispatch => {
  try {
    await axios
      .get(API_URL + `Quiz/GetAll `, {headers:authHeader()})
      .then(response => dispatch(setArtistApplicationStateQuizes(response.data.output_data)));
  } catch (e) {
  }
};

export const submitArtistApplicationTJudge = () => async dispatch => {
  try {
   return await axios
      .post(API_URL + `ArtistProfile/ArtistPayStatus` ,{}, {headers:authHeader()})
      .then(response => {
        return response;
      });
  } catch (e) {
   console.log('application submit error',e);
  }
};

