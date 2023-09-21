import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const judgeApplications = localStorage.getItem('judgeApplications')
  ? JSON.parse(localStorage.getItem('judgeApplications')).length > 0 ? JSON.parse(localStorage.getItem('judgeApplications')) : []
  : [];

const slice = createSlice({
  name: 'judgeApplications',
  initialState: {
    applications: judgeApplications,
    loading: false,
    filterLoading: false,
    filteredApplications: judgeApplications,
    error: false,
  },
  reducers: {
    startLoading: state => {
      state.loading = true;
    },
    startFilterLoading: state => {
      state.filterLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setData: (state, action) => {
  		if(action.payload.IsSuccess) {
  			state.applications = action.payload.JPanellst;
    		state.loading = false;
  		} else {
  			state.applications = [];
        state.loading = false;
  		}
  		localStorage.setItem('judgeApplications', JSON.stringify(state.applications));
    },
    setFilterApplication: (state, action) => {
      state.filteredApplications = action.payload;
      state.filterLoading = false;
    },
  }
});

export default slice.reducer


const { startLoading, startFilterLoading, setData, setFilterApplication, hasError} = slice.actions;

export const fetchApplications = () => async dispatch => {
  if(judgeApplications.length <= 0) {
    dispatch(startLoading());
  }
  try {
    await axios
      .post(API_URL + "JudgeProfile/GetJudgeApplications",{}, {headers:authHeader()})
      .then(response => dispatch(setData(response.data)));
  } catch (e) {
   dispatch(hasError(e.message))
  }
};

export const filterApplications = (appl, filterData) => async dispatch => {
  dispatch(startFilterLoading());
  let filteredData = [];
  if(filterData === 0) {
    dispatch(setFilterApplication(appl))
  } else if(filterData === 1) {
    dispatch(setFilterApplication(appl.filter((key) => {return key.IsApprove})))
  } else if(filterData === 2) {
    dispatch(setFilterApplication(appl.filter((key) => {return key.IsReject})))
  } else if(filterData === 3) {
    dispatch(setFilterApplication(appl.filter((key) => {return !key.IsReject && !key.IsApprove})))
  }
  
  // try {
  //   await axios
  //     .post(API_URL + "JudgeProfile/GetJudgeApplications",{}, {headers:authHeader()})
  //     .then(response => dispatch(setFilterApplication(response.data)));
  // } catch (e) {
  //  dispatch(hasError(e.message))
  // }
};
