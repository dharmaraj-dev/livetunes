import { createSlice } from '@reduxjs/toolkit';
import { successToast, errorToast } from "../services/toast-service";
import axios from 'axios';
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const slice = createSlice({
  name: 'admin',
  initialState: {
    allStates: [],
    allStatesLoading: false,
    allCities: [],
    allCitiesLoading: false,
    addItemLoading: false
  },
  reducers: {
    startStopLoading: (state, action) => {
      if(action.payload.type == "states") {
        state.allStatesLoading = action.payload.data;
      } else if(action.payload.type == "cities") {
        state.allCitiesLoading = action.payload.data;
      }
    },
    setData: (state, action) => {
      if(action.payload.type == "states") {
        state.allStates = action.payload.data;
      } else if(action.payload.type == "cities") {
        state.allCities = action.payload.data;
      }
    },
    updateData: (state, action) => {
      if(action.payload.type == "add") {
        if(action.payload.from == "state") {
          state.allStates = [...state.allStates, {"StateId": action.payload.item, "StateName": action.payload.item}]
        } else if(action.payload.from == "city") {
          state.allCities = [...state.allCities, action.payload.item]
        }
      } else if(action.payload.type == "update") {
        if(action.payload.from == "city") {
          let el = state.allCities.map((item) => {
            if(item.CityId === action.payload.item.CityId){
              item.IsLTLive=action.payload.item.IsLTLive
            }
            return item
          });
          state.allCities = el;
        }
      } else {
        if(action.payload.from == "state") {
          state.allStates = state.allStates.filter((item) => item.StateId !== action.payload.item)
        } else if(action.payload.from == "city") {
          state.allCities = state.allCities.filter((item) => item.CityId !== action.payload.item)
        }
      }
    },
    startItemLoading: (state, action) => {
      state.addItemLoading = true;
    },
    stopItemLoading: (state, action) => {
      state.addItemLoading = false;
    },
  }
});

export default slice.reducer


export const { 
  startStopLoading,
  setData,
  updateData,
  startItemLoading,
  stopItemLoading
} = slice.actions;

export const getAllStates = () => async dispatch => {
  dispatch(startStopLoading({"type": "states", "data": true}));
  try {
   return await axios
      .get(API_URL + `State/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "states", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "states", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "states", "data": false}));
  }
};

export const getAllCities = () => async dispatch => {
  dispatch(startStopLoading({"type": "cities", "data": true}));
  try {
   return await axios
      .get(API_URL + `City/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "cities", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "cities", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "cities", "data": false}));
  }
};

export const addState = (itemName) => async dispatch => {
  dispatch(startItemLoading())
  try {
   return await axios
      .post(API_URL + `State/Insert`, {"StateName": itemName}, {headers:authHeader()})
      .then(response => {
        dispatch(stopItemLoading())
        if(response.data.IsSuccess) {
          successToast("State added.");
          dispatch(updateData({"type": "add", "from": "state",  "item": itemName}));
        }
        return response;
      });
  } catch (e) {
    dispatch(stopItemLoading())
    errorToast("State not added");
  }
};

export const deleteState = (itemId) => async dispatch => {
  dispatch(updateData({"from": "state", "type": "type", "item": itemId}));
  try {
   return await axios
      .post(API_URL + `State/Delete`, {"StateId": itemId}, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast("State deleted.");
        }
        return response;
      });
  } catch (e) {
   errorToast("State not deleted");
  }
};

export const deleteCity = (itemId) => async dispatch => {
  dispatch(updateData({"from": "city", "type": "type", "item": itemId}));
  try {
   return await axios
      .post(API_URL + `City/Delete`, {"CityId": itemId}, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast("City deleted.");
        }
        return response;
      });
  } catch (e) {
   errorToast("City not deleted");
  }
};

export const addCity = (itemName) => async dispatch => {
  dispatch(startItemLoading())
  try {
   return await axios
      .post(API_URL + `City/Insert`, itemName, {headers:authHeader()})
      .then(response => {
        dispatch(stopItemLoading())
        if(response.data.IsSuccess) {
          successToast("City added.");
          dispatch(updateData({"type": "add", "from": "city",  "item": itemName}));
        }
        return response;
      });
  } catch (e) {
    dispatch(stopItemLoading())
    errorToast("City not added");
  }
};

export const updateCity = (data) => async dispatch => {
  dispatch(updateData({"type": "update", "from": "city",  "item": data}));
  try {
   return await axios
      .post(API_URL + `City/Update`, data, {headers:authHeader()})
      .then(response => {
        if(response.data.IsSuccess) {
          successToast("Action on city updated.");
        }
        return response;
      });
  } catch (e) {
    errorToast("Action on city not updated.");
  }
};

