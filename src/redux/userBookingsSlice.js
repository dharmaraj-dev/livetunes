import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const slice = createSlice({
  name: 'userBookings',
  initialState: {
    favouriteArtists: [],
    favouriteArtistsLoading: false,
    favouriteArtistsError: false,
    favouriteArtistsSuccess: false,
    removeFavouriteArtistsLoading: false,
    movedToCart: [],
    pastBookings: [],
    postBookings: [],
    loading: false,
    error: false,
    message: null
  },
  reducers: {
    startFavArtistLoading: state => {
      state.favouriteArtistsLoading = true;
    },
    startRemFavArtistLoading: state => {
      state.removeFavouriteArtistsLoading = true;
    },
    startLoading: state => {
      state.loading = true;
    },
    hasError: (state, action) => {
      state.error = false;
      state.message = action.payload;
      state.loading = false;
    },
    setData: (state, action) => {
  		if(action.payload.IsSuccess) {
  			state.movedToCart = action.payload.selBookDetails.selMovedToCart;
        state.pastBookings = action.payload.selBookDetails.selPastBooking;
        state.postBookings = action.payload.selBookDetails.selPostBooking;
    		state.loading = false;
    		state.error = false;
  		} else {
          state.movedToCart = [];
          state.postBookings = [];
          state.postBookings = [];
          state.error = true;
	        state.loading = false;
  		}
    },
    favArtistSuccessError: (state, action) => {
      state.favouriteArtistsLoading = false;
      if(action.payload.IsSuccess) {
        state.favouriteArtists = action.payload.output_data;
        state.favouriteArtistsError = false;
        state.favouriteArtistsSuccess = true;
        
      } else {
          state.favouriteArtists = [];
          state.favouriteArtistsError = true;
          state.favouriteArtistsSuccess = false;
      }
    },
    remFavArtistSuccessError: (state, action) => {
      state.removeFavouriteArtistsLoading = false;
      if(action.payload.IsSuccess) {
        if(action.payload.dt.ArtistId) {
            let arr = state.favouriteArtists.filter(item => item.ArtistId !== action.payload.dt.ArtistId)
            state.favouriteArtists = arr;
        }
      }
    },
  }
});

export default slice.reducer


const { startFavArtistLoading, startRemFavArtistLoading, remFavArtistSuccessError, startLoading, setData, hasError, favArtistSuccessError} = slice.actions;

export const fetchBookings = (artistId,userId) => async dispatch => {
  dispatch(startLoading());
  try {
    await axios
      .get(API_URL + `UBooking/GetUserBooking` , {headers:authHeader()})
      .then(response => dispatch(setData(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};

export const fetchFavArtists = (userId) => async dispatch => {
  dispatch(startFavArtistLoading());
  try {
    await axios
      .get(API_URL + `AFav/ByUserId/${userId}` , {headers:authHeader()})
      .then(response => dispatch(favArtistSuccessError(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};


export const removeFavArtists = (data,dt) => async dispatch => {
  dispatch(startRemFavArtistLoading());
  try {
    await axios
      .post(API_URL + `AFav/Delete`,data, {headers:authHeader()})
      .then(response => {
        response.data.dt = dt;
        dispatch(remFavArtistSuccessError(response.data))
      });
  } catch (e) {
   dispatch(hasError(e.message))
  }
};
