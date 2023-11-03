import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const filteredArtists = localStorage.getItem("filteredArtists") != null ? JSON.parse(localStorage.getItem("filteredArtists")) : [];
const feedLogs = localStorage.getItem("feedLogs") != null ? JSON.parse(localStorage.getItem("feedLogs")) : [];



const slice = createSlice({
  name: 'user',
  initialState: {
    artistLoading: false,
    filteredArtists,
    feedLogs,
    addFeedbackLoading: false,
  },
  reducers: {
    setArtistLoading: (state, action) => {
      state.artistLoading = true;
    },
    stopArtistLoading: (state, action) => {
      state.artistLoading = false;
    },
    setArtistData: (state, action) => {
      state.filteredArtists = action.payload;
      localStorage.setItem('filteredArtists', JSON.stringify(state.filteredArtists));
    },
    addUpdateFavArtists: (state, action) => {
      const updateList = state.filteredArtists.map((artList) => {
        if(artList.ArtistId == action.payload.ArtId) {
            return { ...artList, IsFavArtist: action.payload.likeState };
        }
        return artList;
      });
      state.filteredArtists = updateList;
      localStorage.setItem('filteredArtists', JSON.stringify(state.filteredArtists));
    },
    addFeedLogs: (state, action) => {
      state.feedLogs = action.payload.output_data;
      localStorage.setItem('feedLogs', JSON.stringify(state.feedLogs));
    },
    startAddFeedbackLoading: (state, action) => {
      state.addFeedbackLoading = true;
    },
    stopAddFeedbackLoading: (state, action) => {
      state.addFeedbackLoading = false;
    },
  }
});

export default slice.reducer


export const { 
  setArtistLoading,
  stopArtistLoading,
  setArtistData,
  addUpdateFavArtists,
  addFeedLogs,
  startAddFeedbackLoading,
  stopAddFeedbackLoading
} = slice.actions;

export const getArtists = (data) => async dispatch => {
    dispatch(setArtistLoading());
    try{
       return await axios 
            .post(API_URL + "UserProfile/GetAllArtist",data,{headers:authHeader()})
            .then((response) => {
                dispatch(stopArtistLoading());
                dispatch(setArtistData(response.data.output_data));
                return response;
            });
    } catch (e) {
        dispatch(stopArtistLoading());
        console.log('settings error',e);
        return e;
    }
};

export const addFavArtist = (data) => async dispatch => {
  dispatch(addUpdateFavArtists(data))
    try{
       return await axios 
            .post(API_URL + "AFav/Insert",data, {headers:authHeader()})
            .then((response) => {
              return response;
            });
    } catch (e) {
        console.log('settings error',e);
        return e;
    }
};

export const removeFavArtist = (data) => async dispatch => {
  dispatch(addUpdateFavArtists(data))
    try{
       return await axios 
            .post(API_URL + "AFav/Delete",data, {headers:authHeader()})
            .then((response) => {
              return response;
            });
    } catch (e) {
        console.log('settings error',e);
        return e;
    }
};

export const getFeedLogs = () => async dispatch => {
    try{
       return await axios 
            .get(API_URL + "UFeedM/GetAll", {headers:authHeader()})
            .then((response) => {
              dispatch(addFeedLogs(response.data))
              return response;
            });
    } catch (e) {
        console.log('getFeedLogs error',e);
        return e;
    }
};

export const addFeedbackForArtist = (data) => async dispatch => {
  dispatch(startAddFeedbackLoading());
    try{
       return await axios 
            .post(API_URL + "UBooking/SaveUFeedback",data, {headers:authHeader()})
            .then((response) => {
              dispatch(stopAddFeedbackLoading());
              return response;
            });
    } catch (e) {
        console.log('getFeedLogs error',e);
        return e;
    }
};
