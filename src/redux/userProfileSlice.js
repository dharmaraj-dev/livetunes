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
      profileImg: "",
      state: "",
      city: "",
      pincode: ""
    },
    profileDataLoading: false,
    profileDataError: false,
    profileDataSuccess: false,
    saveProfileDataLoading: false,
    saveProfileDataError: false,
    saveProfileDataSuccess: false,
    saveProfileDataMessage: null,
  },
  reducers: {
    startLoading: state => {
      state.profileDataLoading = state.profileData.profileImg != "" ? false : true;
    },
    startSaveProfileDataLoading: state => {
      state.saveProfileDataLoading = true;
    },
    setData: (state, action) => {
      state.profileDataLoading = false;
  		if(action.payload.IsSuccess) {
        if(action.payload.selApInfo.length > 0) {
          state.profileData.firstName = action.payload.selApInfo[0].FirstName;
          state.profileData.lastName = action.payload.selApInfo[0].LastName;
          state.profileData.dob = action.payload.selApInfo[0].DateOfBirth;
          state.profileData.gender = action.payload.selApInfo[0].Gender;
          state.profileData.state = `${action.payload.selApInfo[0].StateId}_${action.payload.selApInfo[0].StateName}`;
          state.profileData.city = `${action.payload.selApInfo[0].CityId}_${action.payload.selApInfo[0].CityName}`;
          state.profileData.pincode = action.payload.selApInfo[0].PinCode;
        } else {
          state.profileData.firstName = "";
          state.profileData.lastName = "";
          state.profileData.dob = "";
          state.profileData.gender = "";
          state.profileData.state = "";
          state.profileData.city = "";
          state.profileData.pincode = "";
        }
        if(action.payload.selAddress.length > 0) {
          state.profileData.address = action.payload.selAddress[0].Address1;
          state.profileData.state = `${action.payload.selApInfo[0].StateId}_${action.payload.selApInfo[0].StateName}`;
          state.profileData.city = `${action.payload.selApInfo[0].CityId}_${action.payload.selApInfo[0].CityName}`;
          state.profileData.pincode = action.payload.selApInfo[0].PinCode;
        } else {
          state.profileData.address = "";
          state.profileData.state = ""
          state.profileData.city = ""
          state.profileData.pincode = ""
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
  }
};

export const saveProfileData = (data) => async dispatch => {
  dispatch(startSaveProfileDataLoading());
  try {
    await axios
      .post(API_URL + `UserProfile/SaveUProfile`, data , {headers:authHeader()})
      .then(response => dispatch(saveProfileDataSuccessError(response.data)));
  } catch (e) {
  }
};
