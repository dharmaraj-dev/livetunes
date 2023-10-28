import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const filteredArtists = localStorage.getItem("filteredArtists") != null ? JSON.parse(localStorage.getItem("filteredArtists")) : [];



const slice = createSlice({
  name: 'user',
  initialState: {
    artistLoading: false,
    filteredArtists,
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
        if(artList.AFavId == action.payload.AFavId) {
            return { ...artList, IsFavArtist: action.payload.likeState };
        }
        return artList;
      });
      state.filteredArtists = updateList;
      localStorage.setItem('filteredArtists', JSON.stringify(state.filteredArtists));
    },
  }
});

export default slice.reducer


export const { 
  setArtistLoading,
  stopArtistLoading,
  setArtistData,
  addUpdateFavArtists
} = slice.actions;

export const getArtists = (data) => async dispatch => {
    dispatch(setArtistLoading());
    try{
       return await axios 
            .post(API_URL + "UserProfile/GetAllArtist",data,{headers:authHeader()})
            .then((response) => {
              console.log('response', response)
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
    try{
       return await axios 
            .post(API_URL + "AFav/Insert",data, {headers:authHeader()})
            .then((response) => {
              let artistToUpdate;
              if(response.data.IsSuccess) {
                artistToUpdate = {
                  "AFavId": data.AFavId,
                  "likeState": data.likeState
                }
              } else {
                artistToUpdate = {
                  "AFavId": data.AFavId,
                  "likeState": data.likeState
                }
              }
              dispatch(addUpdateFavArtists(data))
              return response;
            });
    } catch (e) {
        console.log('settings error',e);
        return e;
    }
};

export const removeFavArtist = (data) => async dispatch => {
    try{
       return await axios 
            .post(API_URL + "AFav/Delete",data, {headers:authHeader()})
            .then((response) => {
              let artistToUpdate;
              if(response.data.IsSuccess) {
                artistToUpdate = {
                  "AFavId": data.AFavId,
                  "likeState": data.likeState
                }
              } else {
                artistToUpdate = {
                  "AFavId": data.AFavId,
                  "likeState": data.likeState
                }
              }
              dispatch(addUpdateFavArtists(data))
              return response;
            });
    } catch (e) {
        console.log('settings error',e);
        return e;
    }
};
