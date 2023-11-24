import { createSlice } from '@reduxjs/toolkit';
import { successToast, errorToast } from "../services/toast-service";
import axios from 'axios';
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const generalSettings = localStorage.getItem('generalSettings') != null ? JSON.parse(localStorage.getItem("generalSettings")) : null

const slice = createSlice({
  name: 'commonStates',
  initialState: {
    getGeneralSettingsLoading: false,
    addCardLoading: false,
    addAddressLoading: false,
    generalSettings,
    supportFaqs: [],
    supportFaqsLoading: false
  },
  reducers: {
    setGeneralSettingsLoading: (state, action) => {
      state.getGeneralSettingsLoading = true;
    },
    stopGeneralSettingsLoading: (state, action) => {
      state.getGeneralSettingsLoading = false;
    },
    storeGeneralSettings: (state, action) => {
      state.generalSettings = action.payload;
      localStorage.setItem('generalSettings', JSON.stringify(state.generalSettings))
    },
    setAddCardLoading: (state, action) => {
      state.addCardLoading = true;
    },
    stopAddCardLoading: (state, action) => {
      state.addCardLoading = false;
    },
    setAddAddressLoading: (state, action) => {
      state.addAddressLoading = true;
    },
    stopAddAddressLoading: (state, action) => {
      state.addAddressLoading = false;
    },
    updateGeneralSettings: (state, action) => {
      if(action.payload.type == "card") {
        if(action.payload.status == "add") {
          state.generalSettings.lstCarddetails = action.payload.data;
        } else {
            state.generalSettings.lstCarddetails = state.generalSettings?.lstCarddetails?.filter((item) => item.ACardDetailsId !== action.payload.data)
        }
      }
      if(action.payload.type == "address") {
        if(action.payload.status == "add") {
            state.generalSettings.lstAddressProof = action.payload.data;
        } else {
            state.generalSettings.lstAddressProof = state.generalSettings?.lstAddressProof?.filter((item) => item.AAddressProofId !== action.payload.data)
        }
      }
      localStorage.setItem('generalSettings', JSON.stringify(state.generalSettings))
    },
    startStopSupportFaqLoading: (state, action) => {
      state.supportFaqsLoading = action.payload;
    },
    setSupportFaqData: (state, action) => {
      state.supportFaqs = action.payload;
    },
  }
});

export default slice.reducer


export const { 
  setGeneralSettingsLoading,
  stopGeneralSettingsLoading,
  storeGeneralSettings,
  setAddCardLoading,
  stopAddCardLoading,
  setAddAddressLoading,
  stopAddAddressLoading,
  updateGeneralSettings,
  startStopSupportFaqLoading,
  setSupportFaqData
} = slice.actions;

export const getGeneralSettings = (data) => async dispatch => {
  dispatch(setGeneralSettingsLoading())
  try {
   return await axios
      .post(API_URL + `ArtistGeneral/GetAllGeneral` ,data, {headers:authHeader()})
      .then(response => {
        dispatch(stopGeneralSettingsLoading())
        dispatch(storeGeneralSettings(response.data))
        return response;
      });
  } catch (e) {
    dispatch(stopGeneralSettingsLoading())
  }
};


export const addCard = (data) => async dispatch => {
  dispatch(setAddCardLoading());
  try {
   return await axios
      .post(API_URL + `ArtistCard/AddCard` ,data, {headers:authHeader()})
      .then(response => {
        dispatch(stopAddCardLoading());
        if(response.data.IsSuccess) {
          dispatch(updateGeneralSettings({"type": "card", "data": response.data.lstCarddetails, "status": "add"}))
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
     dispatch(stopAddCardLoading());
  }
};

export const saveNotificationSettings = (data) => async dispatch => {
  try {
   return await axios
      .post(API_URL + `ArtistNotification/SaveNot` ,data, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
  }
};

export const saveAddress = (data) => async dispatch => {
  dispatch(setAddAddressLoading())
  try {
   return await axios
      .post(API_URL + `ArtistAddProof/AddAddress` ,data, {headers:authHeader()})
      .then(response => {
        dispatch(stopAddAddressLoading())
        if(response.data.IsSuccess) {
          dispatch(updateGeneralSettings({"type": "address", "data": response.data.lstAddressProof, "status": "add"}))
          //lstAddressProof
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
    dispatch(stopAddAddressLoading())
  }
};

export const deleteCard = (data) => async dispatch => {
  dispatch(updateGeneralSettings({"type": "card", "data": data.ACardDetailsId, "status": "remove"}))
  try {
   return await axios
      .post(API_URL + `ArtistCard/DeleteCard` ,data, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
  }
};

export const deleteAddress = (data) => async dispatch => {
  dispatch(updateGeneralSettings({"type": "address", "data": data.AAddressProofId, "status": "remove"}))
  try {
   return await axios
      .post(API_URL + `ArtistAddProof/DeleteAddress` ,data, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast(response.data.Message)
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
  }
};

export const getSupportFaqs = () => async dispatch => {
  dispatch(startStopSupportFaqLoading(true))
  try {
   return await axios
      .get(API_URL + `SFaq/GetAll` , {headers:authHeader()})
      .then(response => {
        dispatch(startStopSupportFaqLoading(false))
        if(response.data.IsSuccess) {
          dispatch(setSupportFaqData(response.data.output_data))
        } else {
          errorToast(response.data.Message)
        }
        return response;
      });
  } catch (e) {
    dispatch(startStopSupportFaqLoading(false))
  }
};
