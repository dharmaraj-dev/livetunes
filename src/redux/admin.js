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
    addItemLoading: false,
    allEventsLoading: false,
    allEvents: [],
    allEventModesLoading: false,
    allEventModes: [],
    allCategoriesLoading: false,
    allCategories: [],
    allGenreLoading: false,
    allGenres: [],
    allLanguagesLoading: false,
    allLanguages: [],
    allBanksLoading: false,
    allBanks: [],
    allBranchesLoading: false,
    allBranches: [],
    allAddresProofsLoading: false,
    allAddresProofs: [],
    allEventTypesLoading: false,
    allEventTypes: [],
    allIdProofsLoading: false,
    allIdProofs: [],
  },
  reducers: {
    startStopLoading: (state, action) => {
      if(action.payload.type == "states") {
        state.allStatesLoading = action.payload.data;
      } else if(action.payload.type == "cities") {
        state.allCitiesLoading = action.payload.data;
      } else if(action.payload.type == "events") {
        state.allEventsLoading = action.payload.data;
      } else if(action.payload.type == "eventModes") {
        state.allEventModesLoading = action.payload.data;
      } else if(action.payload.type == "categories") {
        state.allCategoriesLoading = action.payload.data;
      } else if(action.payload.type == "genre") {
        state.allGenreLoading = action.payload.data;
      } else if(action.payload.type == "language") {
        state.allLanguagesLoading = action.payload.data;
      } else if(action.payload.type == "banks") {
        state.allBanksLoading = action.payload.data;
      } else if(action.payload.type == "branches") {
        state.allBranchesLoading = action.payload.data;
      } else if(action.payload.type == "addressProofs") {
        state.allAddresProofsLoading = action.payload.data;
      } else if(action.payload.type == "eventTypes") {
        state.allEventTypesLoading = action.payload.data;
      } else if(action.payload.type == "idProofs") {
        state.allIdProofsLoading = action.payload.data;
      }
    },
    setData: (state, action) => {
      if(action.payload.type == "states") {
        state.allStates = action.payload.data;
      } else if(action.payload.type == "cities") {
        state.allCities = action.payload.data;
      } else if(action.payload.type == "events") {
        state.allEvents = action.payload.data;
      } else if(action.payload.type == "eventModes") {
        state.allEventModes = action.payload.data;
      } else if(action.payload.type == "categories") {
        state.allCategories = action.payload.data;
      } else if(action.payload.type == "genre") {
        state.allGenres = action.payload.data;
      } else if(action.payload.type == "language") {
        state.allLanguages = action.payload.data;
      } else if(action.payload.type == "banks") {
        state.allBanks = action.payload.data;
      } else if(action.payload.type == "branches") {
        state.allBranches = action.payload.data;
      } else if(action.payload.type == "addressProofs") {
        state.allAddresProofs = action.payload.data;
      } else if(action.payload.type == "eventTypes") {
        state.allEventTypes = action.payload.data;
      } else if(action.payload.type == "idProofs") {
        state.allIdProofs = action.payload.data;
      }
    },
    updateData: (state, action) => {
      if(action.payload.type == "add") {
        if(action.payload.from == "state") {
          state.allStates = [...state.allStates, action.payload.item]
        } else if(action.payload.from == "city") {
          state.allCities = [...state.allCities, action.payload.item]
        } else if(action.payload.from == "event") {
          state.allEvents = [...state.allEvents, action.payload.item]
        } else if(action.payload.from == "eventMode") {
          state.allEventModes = [...state.allEventModes, action.payload.item]
        } else if(action.payload.from == "category") {
          state.allCategories = [...state.allCategories, action.payload.item]
        } else if(action.payload.from == "genre") {
          state.allGenres = [...state.allGenres, action.payload.item]
        } else if(action.payload.from == "languages") {
          state.allLanguages = [...state.allLanguages, action.payload.item]
        } else if(action.payload.from == "banks") {
          state.allBanks = [...state.allBanks, action.payload.item]
        } else if(action.payload.from == "branches") {
          state.allBranches = [...state.allBranches, action.payload.item]
        } else if(action.payload.from == "addressProofs") {
          state.allAddresProofs = [...state.allAddresProofs, action.payload.item]
        } else if(action.payload.from == "idProofs") {
          state.allIdProofs = [...state.allIdProofs, action.payload.item]
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
        } else if(action.payload.from == "event") {
          state.allEvents = state.allEvents.filter((item) => item.EventsId !== action.payload.item)
        } else if(action.payload.from == "eventMode") {
          state.allEventModes = state.allEventModes.filter((item) => item.EventModeId !== action.payload.item)
        } else if(action.payload.from == "category") {
          state.allCategories = state.allCategories.filter((item) => item.CategoryId !== action.payload.item)
        } else if(action.payload.from == "genre") {
          state.allGenres = state.allGenres.filter((item) => item.GenreId !== action.payload.item)
        } else if(action.payload.from == "genre") {
          state.allGenres = state.allGenres.filter((item) => item.GenreId !== action.payload.item)
        } else if(action.payload.from == "languages") {
          state.allLanguages = state.allLanguages.filter((item) => item.LanguageId !== action.payload.item)
        } else if(action.payload.from == "banks") {
          state.allBanks = state.allBanks.filter((item) => item.BankId !== action.payload.item)
        } else if(action.payload.from == "branches") {
          state.allBranches = state.allBranches.filter((item) => item.BankBranchId !== action.payload.item)
        } else if(action.payload.from == "addressProofs") {
          state.allAddresProofs = state.allAddresProofs.filter((item) => item.AddressProofId !== action.payload.item)
        } else if(action.payload.from == "idProofs") {
          state.allIdProofs = state.allIdProofs.filter((item) => item.IdProofId !== action.payload.item)
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

export const getAllEvents = () => async dispatch => {
  dispatch(startStopLoading({"type": "events", "data": true}));
  try {
   return await axios
      .get(API_URL + `Events/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "events", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "events", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "events", "data": false}));
  }
};

export const getAllEventModes = () => async dispatch => {
  dispatch(startStopLoading({"type": "eventModes", "data": true}));
  try {
   return await axios
      .get(API_URL + `EventMode/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "eventModes", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "eventModes", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "eventModes", "data": false}));
  }
};

export const getAllCategories = () => async dispatch => {
  dispatch(startStopLoading({"type": "categories", "data": true}));
  try {
   return await axios
      .get(API_URL + `Category/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "categories", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "categories", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "categories", "data": false}));
  }
};

export const getGenre = () => async dispatch => {
  dispatch(startStopLoading({"type": "genre", "data": true}));
  try {
   return await axios
      .get(API_URL + `Genre/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "genre", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "genre", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "genre", "data": false}));
  }
};

export const getLanguages = () => async dispatch => {
  dispatch(startStopLoading({"type": "language", "data": true}));
  try {
   return await axios
      .get(API_URL + `Language/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "language", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "language", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "language", "data": false}));
  }
};

export const getBanks = () => async dispatch => {
  dispatch(startStopLoading({"type": "banks", "data": true}));
  try {
   return await axios
      .get(API_URL + `Bank/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "banks", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "banks", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "banks", "data": false}));
  }
};

export const getBranches = () => async dispatch => {
  dispatch(startStopLoading({"type": "branches", "data": true}));
  try {
   return await axios
      .get(API_URL + `BankBranch/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "branches", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "branches", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "branches", "data": false}));
  }
};

export const getAddressProofs = () => async dispatch => {
  dispatch(startStopLoading({"type": "addressProofs", "data": true}));
  try {
   return await axios
      .get(API_URL + `AddressProof/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "addressProofs", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "addressProofs", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "addressProofs", "data": false}));
  }
};

export const getEventTypes = () => async dispatch => {
  dispatch(startStopLoading({"type": "eventTypes", "data": true}));
  try {
   return await axios
      .get(API_URL + `Event Type/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "eventTypes", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "eventTypes", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "eventTypes", "data": false}));
  }
};

export const getIdProofs = () => async dispatch => {
  dispatch(startStopLoading({"type": "idProofs", "data": true}));
  try {
   return await axios
      .get(API_URL + `IdProof/GetAll`, {headers:authHeader()})
      .then(response => {
        dispatch(startStopLoading({"type": "idProofs", "data": false}));
        if(response.data.IsSuccess) {
          dispatch(setData({"type": "idProofs", "data": response.data.output_data}));
        }
        return response;
      });
  } catch (e) {
   dispatch(startStopLoading({"type": "idProofs", "data": false}));
  }
};

export const addMasterCommon = (url, itemName, from) => async dispatch => {
  dispatch(startItemLoading())
  try {
   return await axios
      .post(API_URL + url, itemName, {headers:authHeader()})
      .then(response => {
        dispatch(stopItemLoading())
        if(response.data.IsSuccess) {
          successToast(`${from} added`);
          dispatch(updateData({"type": "add", "from": from,  "item": itemName}));
        }
        return response;
      });
  } catch (e) {
    dispatch(stopItemLoading())
    errorToast(`${from} not added`);
  }
};

export const deleteMasterCommon = (url, itemName, from, data) => async dispatch => {
  dispatch(startItemLoading())
  try {
   return await axios
      .post(API_URL + url, data, {headers:authHeader()})
      .then(response => {
        dispatch(stopItemLoading())
        if(response.data.IsSuccess) {
          successToast(`${from} deleted`);
          dispatch(updateData({"type": "delete", from,  "item": itemName}));
        }
        return response;
      });
  } catch (e) {
    dispatch(stopItemLoading())
    errorToast(`${from} not deleted`);
  }
};

