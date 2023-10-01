import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";



const slice = createSlice({
  name: 'artistSlots',
  initialState: {
    loading: false,
    addUpdateLoading: false,
    error: false,
    slots: [],
  },
  reducers: {
    startLoading: state => {
      state.loading = true;
      state.error = false;
    },
    startAddUpdateLoading: state => {
      state.addUpdateLoading = true;
      state.loading = false;
      state.error = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.addUpdateLoading = false;
    },
    getSlotsSuccess: (state, action) => {
  		if(action.payload.IsSuccess) {
  			state.slots = action.payload.output_data;
    		state.loading = false;
        state.error = false;
  		} else {
  			state.slots = [];
    		state.loading = false;
        state.error = false;
  		}      
    },
    addSlotsSuccess: (state, action) => {
      console.log('action', action);
      if(action.payload.IsSuccess) {
        state.slots = action.payload.slot_data;
        state.addUpdateLoading = false;
        state.error = false;
      } else {
        //state.slots = [];
        state.addUpdateLoading = false;
        state.error = false;
      }      
    },
    updateSlotsSuccess: (state, action) => {
      if(action.payload.IsSuccess) {
        state.slots = action.payload.slot_data;
        state.addUpdateLoading = false;
        state.error = false;
      } else {
        //state.slots = [];
        state.addUpdateLoading = false;
        state.error = false;
      }      
    },
  }
});

export default slice.reducer


const { getSlotsSuccess, addSlotsSuccess, updateSlotsSuccess, startLoading, startAddUpdateLoading, hasError} = slice.actions;

export const getSlots = (artistId) => async dispatch => {
	dispatch(startLoading());
  try {
    await axios
      .get(API_URL + `ASlot/ByArtistId/${artistId}`,{headers:authHeader()})
      .then(response => dispatch(getSlotsSuccess(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};

export const addArtistSlot = (data) => async dispatch => {
  dispatch(startAddUpdateLoading());
  try {
    await axios
      .post(API_URL + `ASlot/Insert`, data, {headers:authHeader()})
      .then(response => dispatch(addSlotsSuccess(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};

export const updateArtistSlot = (data) => async dispatch => {
  dispatch(startAddUpdateLoading());
  try {
    await axios
      .post(API_URL + `ASlot/Update`, data, {headers:authHeader()})
      .then(response => dispatch(updateSlotsSuccess(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};
