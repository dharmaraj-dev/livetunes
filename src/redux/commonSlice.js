import { createSlice } from '@reduxjs/toolkit';
import { successToast, errorToast } from "../services/toast-service";
import axios from 'axios';
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const slice = createSlice({
  name: 'commonStates',
  initialState: {
    addNewCardLoading: false
  },
  reducers: {
    setAddNewCardLoading: (state, action) => {
      state.addNewCardLoading = true;
    },
    stopAddNewCardLoading: (state, action) => {
      state.addNewCardLoading = false;
    }
  }
});

export default slice.reducer


export const { 
  setAddNewCardLoading,
  stopAddNewCardLoading
} = slice.actions;

export const addNewCard = (data) => async dispatch => {
  dispatch(setAddNewCardLoading());
  try {
   return await axios
      .post(API_URL + `ArtistCard/AddCard` ,data, {headers:authHeader()})
      .then(response => {
        dispatch(stopAddNewCardLoading());
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
     dispatch(stopAddNewCardLoading());
  }
};

export const saveNotificationSettings = (data) => async dispatch => {
  dispatch(setAddNewCardLoading());
  try {
   return await axios
      .post(API_URL + `ArtistNotification/SaveNot` ,data, {headers:authHeader()})
      .then(response => {
        dispatch(stopAddNewCardLoading());
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
     dispatch(stopAddNewCardLoading());
  }
};