import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const slice = createSlice({
  name: 'artistDetails',
  initialState: {
    details: null,
    loading: true,
    error: false,
  },
  reducers: {
    startLoading: state => {
      state.loading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setData: (state, action) => {
  		if(action.payload.IsSuccess) {
  			state.details = action.payload;
    		state.loading = false;
  		} else {
  			state.details = null;
        state.error = "error";
        state.loading = false;
  		}
    },
  }
});

export default slice.reducer


const { startLoading, setData, hasError} = slice.actions;

export const fetchArtistDetails = (artistId,userId) => async dispatch => {
  dispatch(startLoading());
  try {
    await axios
      .get(API_URL + `ArtistProfile/GetArtistProfileNew/${artistId}/${userId}` , {headers:authHeader()})
      .then(response => dispatch(setData(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};
