import { createSlice } from '@reduxjs/toolkit';
import { successToast, errorToast } from "../services/toast-service";
import axios from 'axios';
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const slice = createSlice({
  name: 'commonStates',
  initialState: {
    addCardLoading: false,
    addAddressLoading: false
  },
  reducers: {
    setAddCardLoading: (state, action) => {
      state.addCardLoading = true;
    },
    stopAddCardLoading: (state, action) => {
      state.addCardLoading = false;
    },
    setAddAddressLoading: (state, action) => {
      state.addAddressLoading = true;
    },
    stopAddAddressLoading: (state, action) => {
      state.addAddressLoading = false;
    }
  }
});

export default slice.reducer


export const { 
  setAddCardLoading,
  stopAddCardLoading,
  setAddAddressLoading,
  stopAddAddressLoading
} = slice.actions;

export const addCard = (data) => async dispatch => {
  dispatch(setAddCardLoading());
  try {
   return await axios
      .post(API_URL + `ArtistCard/AddCard` ,data, {headers:authHeader()})
      .then(response => {
        dispatch(stopAddCardLoading());
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
     dispatch(stopAddCardLoading());
  }
};

export const saveNotificationSettings = (data) => async dispatch => {
  try {
   return await axios
      .post(API_URL + `ArtistNotification/SaveNot` ,data, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
  }
};

export const saveAddress = (data) => async dispatch => {
  dispatch(setAddAddressLoading())
  try {
   return await axios
      .post(API_URL + `ArtistAddProof/AddAddress` ,data, {headers:authHeader()})
      .then(response => {
        dispatch(stopAddAddressLoading())
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
    dispatch(stopAddAddressLoading())
  }
};

export const deleteCard = (data) => async dispatch => {
  try {
   return await axios
      .post(API_URL + `ArtistCard/DeleteCard` ,data, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
  }
};

export const deleteAddress = (data) => async dispatch => {
  try {
   return await axios
      .post(API_URL + `ArtistAddProof/DeleteAddress` ,data, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
  }
};

