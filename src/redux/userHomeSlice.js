import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const spEvents = localStorage.getItem('specialEvents')
  ? JSON.parse(localStorage.getItem('specialEvents')).length > 0 ? JSON.parse(localStorage.getItem('specialEvents')) : []
  : [];
const hBanner = localStorage.getItem('headerBanner')
  ? JSON.parse(localStorage.getItem('headerBanner')).length > 0 ? JSON.parse(localStorage.getItem('headerBanner')) : []
  : [];
const aBanner = localStorage.getItem('addBanner')
  ? JSON.parse(localStorage.getItem('addBanner')).length > 0 ? JSON.parse(localStorage.getItem('addBanner')) : []
  : [];


const slice = createSlice({
  name: 'userHome',
  initialState: {
    specialEvents: spEvents,
    headerBanner: hBanner,
    addBanner: aBanner,
    homeLoading: (spEvents.length > 0 && hBanner.length > 0 && aBanner.length > 0) ? false : true,
    error: false,
  },
  reducers: {
    startLoading: state => {
      state.homeLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.homeLoading = false;
    },
    dataSuccess: (state, action) => {
    	console.log('action.payload', action.payload)
		if(action.payload.IsSuccess) {
			state.specialEvents = action.payload.output_data.length>0? action.payload.output_data.filter((dt) => {return !dt.IsHeadBanner && !dt.IsSBanner}):action.payload.default_data.filter((dt)=>{return !dt.IsHeadBanner && !dt.IsSBanner});
			state.headerBanner = action.payload.output_data.length>0 ? action.payload.output_data.filter((dt) => {return dt.IsHeadBanner}) : action.payload.default_data.filter((dt)=> {return dt.IsHeadBanner});
			state.addBanner = action.payload.output_data.length>0 ? action.payload.output_data.filter((dt) => {return dt.IsSBanner}) : action.payload.default_data.filter((dt)=> {return dt.IsSBanner});
      		state.homeLoading = false;
		} else {
			state.specialEvents = [];
			state.headerBanner = [];
			state.addBanner = [];
      		state.homeLoading = false;
		}
		localStorage.setItem('specialEvents', JSON.stringify(state.specialEvents));
  		localStorage.setItem('headerBanner', JSON.stringify(state.headerBanner));
  		localStorage.setItem('addBanner', JSON.stringify(state.addBanner));
      
    },
  }
});

export default slice.reducer


const { dataSuccess, startLoading, hasError} = slice.actions;

export const fetchHomeData = () => async dispatch => {
	if(!(spEvents.length > 0 && hBanner.length > 0 && aBanner.length > 0)){
		dispatch(startLoading());
	}
  try {
    await axios
      .get(API_URL + "SpecialEvents/GetAll",{headers:authHeader()})
      .then(response => dispatch(dataSuccess(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};
