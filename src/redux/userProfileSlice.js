import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const slice = createSlice({
  name: 'userProfile',
  initialState: {
    profileData: {
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      profileImg: ""
    },
    profileDataLoading: false,
    profileDataError: false,
    profileDataSuccess: false,
    saveProfileDataLoading: true,
    saveProfileDataError: false,
    saveProfileDataSuccess: false,
    saveProfileDataMessage: null,
  },
  reducers: {
    startLoading: state => {
      state.profileDataLoading = true;
    },
    startSaveProfileDataLoading: state => {
      state.saveProfileDataLoading = true;
    },
    setData: (state, action) => {
      console.log(action.payload.selApInfo.length)
      state.profileDataLoading = false;
  		if(action.payload.IsSuccess) {
        if(action.payload.selApInfo.length > 0) {
          state.profileData.firstName = action.payload.selApInfo[0].FirstName;
          state.profileData.lastName = action.payload.selApInfo[0].LastName;
          state.profileData.dob = action.payload.selApInfo[0].DateOfBirth;
          state.profileData.gender = action.payload.selApInfo[0].Gender;
        } else {
          state.profileData.firstName = "";
          state.profileData.lastName = "";
          state.profileData.dob = "";
          state.profileData.gender = ""
        }
        if(action.payload.selAddress.length > 0) {
          state.profileData.address = action.payload.selAddress[0].Address1;
        } else {
          state.profileData.address = "";
        }
        if(action.payload.selProfileImage.length > 0) {
          state.profileData.profileImg = action.payload.selProfileImage[0].LTMediaURL;
        } else {
          state.profileData.profileImg = "";
        }
  		} else {
  			state.profileData = null;
        state.profileDataError = true;
  		}
    },
    saveProfileDataSuccessError: (state, action) => {
      if(action.payload.IsSuccess) {
        state.saveProfileDataLoading = false;
        state.saveProfileDataSuccess = true;
        state.saveProfileDataMessage = action.payload.Message;
      } else {
        state.saveProfileDataError = true;
        state.saveProfileDataLoading = false;
        state.saveProfileDataMessage = action.payload.Message;
      }
    },
  }
});

export default slice.reducer


const { startLoading, setData, startSaveProfileDataLoading, saveProfileDataSuccessError} = slice.actions;

export const fetchUserProfile = (artistId,userId) => async dispatch => {
  dispatch(startLoading());
  try {
    await axios
      .get(API_URL + `UserProfile/GetUserProfile` , {headers:authHeader()})
      .then(response => dispatch(setData(response.data)));
  } catch (e) {
    console.log(e);
  }
};

export const saveProfileData = (data) => async dispatch => {
  dispatch(startSaveProfileDataLoading());
  try {
    await axios
      .post(API_URL + `UserProfile/SaveUProfile`, data , {headers:authHeader()})
      .then(response => dispatch(saveProfileDataSuccessError(response.data)));
  } catch (e) {
    console.log(e);
  }
};
