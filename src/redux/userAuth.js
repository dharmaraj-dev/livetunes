import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const user = localStorage.getItem("user") != null ? JSON.parse(localStorage.getItem("user")) : null;
const welcomeSeen = localStorage.getItem("welcomeSeen") === "true" ? true : false;
const joiningType = localStorage.getItem("joiningFor");
const IsProfileSend = localStorage.getItem("IsProfileSend") === "true" ? true : false;
const ArtistId = localStorage.getItem("ArtistId");
const ArtistIsApproved = localStorage.getItem('is_approved') === "true" ? true : false;
const ArtistIsPending = localStorage.getItem('is_pending') === "true" ? true : false;
const ArtistIsNotSubmitted = localStorage.getItem('is_not_submitted') === "true" ? true : false;
const ArtistIsRejected = localStorage.getItem('is_rejection') === "true" ? true : false;

const slice = createSlice({
  name: 'userAuth',
  initialState: {
    isLoggedIn: user != null ? true : false,
    otpSent: false,
    otpSentTo: null,
    user,
    welcomeSeen,
    joiningType,
    IsProfileSend,
    ArtistId,
    ArtistIsApproved,
    ArtistIsPending,
    ArtistIsNotSubmitted,
    ArtistIsRejected
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.welcomeSeen = true;
      state.user = action.payload;
      console.log(action.payload);
      localStorage.setItem('user', btoa(JSON.stringify(state.user)));
    },
    setOtpSent: (state, action) => {
      state.otpSent = action.payload;
    },
    setOtpSentTo: (state, action) => {
      state.otpSentTo = action.payload;
    },
    setWelcomeSeen: (state, action) => {
      state.welcomeSeen = action.payload;
      localStorage.setItem("welcomeSeen", action.payload);
    },
    setJoiningType: (state, action) => {
      state.joiningType = action.payload;
      localStorage.setItem("joiningFor", action.payload);
    },
    setIsArtistProfileSend: (state, action) => {
      state.IsProfileSend = action.payload;
      localStorage.setItem('IsProfileSend', state.IsProfileSend);
    },
    setArtistId: (state, action) => {
      state.ArtistId = action.payload;
      localStorage.setItem('ArtistId', state.ArtistId);
    },
    setArtistIsApproved: (state, action) => {
      state.ArtistIsApproved = action.payload;
      localStorage.setItem('is_approved', state.ArtistIsApproved);
    },
    setArtistIsPending: (state, action) => {
      state.ArtistIsPending = action.payload;
      localStorage.setItem('is_pending', state.ArtistIsPending);
    },
    setArtistIsNotSubmitted: (state, action) => {
      state.ArtistIsNotSubmitted = action.payload;
      localStorage.setItem('is_not_submitted', state.ArtistIsNotSubmitted);
    },
    setArtistRejected: (state, action) => {
      state.ArtistIsRejected = action.payload;
      localStorage.setItem('is_rejection', state.ArtistIsRejected);
    },
    setLogout: (state, action) => {
      state.welcomeSeen = true;
      state.isLoggedIn = false;
      state.user = null;
    },
  }
});

export default slice.reducer


export const { 
  setIsLoggedIn,
  setOtpSent,
  setWelcomeSeen,
  setIsArtistProfileSend,
  setJoiningType,
  setOtpSentTo,  
  setArtistId,
  setArtistIsApproved,
  setArtistIsPending,
  setArtistIsNotSubmitted,
  setArtistRejected,
  setLogout
} = slice.actions;
