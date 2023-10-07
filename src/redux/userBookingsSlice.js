import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const slice = createSlice({
  name: 'userBookings',
  initialState: {
    movedToCart: [],
    pastBookings: [],
    postBookings: [],
    loading: false,
    error: false,
    message: null
  },
  reducers: {
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
  }
});

export default slice.reducer


const { startLoading, setData, hasError} = slice.actions;

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
