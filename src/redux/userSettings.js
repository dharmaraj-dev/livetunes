import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const selectedLanguages = localStorage.getItem('selectedLanguages')
  ? JSON.parse(localStorage.getItem('selectedLanguages')).length > 0 ? JSON.parse(localStorage.getItem('selectedLanguages')) : [] : [];


const selectedCity = localStorage.getItem('selectedCity') != null ? localStorage.getItem('selectedCity') : null;

const userRequestedCities = localStorage.getItem('userRequestedCities')
  ? JSON.parse(localStorage.getItem('userRequestedCities')).length > 0 ? JSON.parse(localStorage.getItem('userRequestedCities')) : [] : [];

const userRequestedStates = localStorage.getItem('userRequestedStates')
  ? JSON.parse(localStorage.getItem('userRequestedStates')).length > 0 ? JSON.parse(localStorage.getItem('userRequestedStates')) : [] : [];

const userMinimumBudget = localStorage.getItem('userMinimumBudget') != null ? localStorage.getItem('userMinimumBudget') : 5000;

const userMaximumBudget = localStorage.getItem('userMaximumBudget') != null ? localStorage.getItem('userMaximumBudget') : 150000;

const userMusicalityTypes = localStorage.getItem('userMusicalityTypes') != null
  ? JSON.parse(localStorage.getItem('userMusicalityTypes')).length > 0 ? JSON.parse(localStorage.getItem('userMusicalityTypes')) : [] : [];

const isSettingsSaved = localStorage.getItem('isSettingsSaved') != null ? true : false;

const savedUsersSettings = (localStorage.getItem('savedUsersSettings') != null && localStorage.getItem('savedUsersSettings') != "null")
  ? JSON.parse(localStorage.getItem('savedUsersSettings')).length > 0 ? JSON.parse(localStorage.getItem('savedUsersSettings')) : [] : [];

const userSelectedCategories = localStorage.getItem("userSelectedCategories") != null ? JSON.parse(localStorage.getItem("userSelectedCategories")) : [];

const userSelectedGenres = localStorage.getItem("userSelectedGenres") != null ? JSON.parse(localStorage.getItem("userSelectedGenres")) : [];

const userSelectedEvents = localStorage.getItem("userSelectedEvents") != null ? JSON.parse(localStorage.getItem("userSelectedEvents")) : [];

  const slice = createSlice({
    name:'userSettings',
    initialState:{
        selectedLanguages,
        selectedCity,
        userRequestedStates,
        userRequestedCities,
        userMinimumBudget,
        userMaximumBudget,
        userMusicalityTypes,
        isSettingsSaved,
        savedUsersSettings,
        updateSettingsLoading: false,
        userSelectedCategories,
        userSelectedGenres,
        userSelectedEvents
    },
    reducers: {
        setLanguages : (state,action) => {
            state.selectedLanguages = action.payload;
            localStorage.setItem('selectedLanguages',JSON.stringify(state.selectedLanguages));
        },
        setUserRequestedStates : (state,action) => {
            state.userRequestedStates = action.payload;
            localStorage.setItem('userRequestedStates',JSON.stringify(state.userRequestedStates));
        },
        setUserRequestedCities : (state,action) => {
            state.userRequestedCities = action.payload;
            localStorage.setItem('userRequestedCities',JSON.stringify(state.userRequestedCities));
        },
        setSelectedCity : (state,action) => {
            if(state.selectedCity === action.payload) {
                state.selectedCity = null;
            } else {
                state.selectedCity = action.payload;
            }
            
            localStorage.setItem('selectedCity',state.selectedCity);
        },
        setSettingsSaveStatus : state => {
            state.isSettingsSaved = true;
            localStorage.setItem('isSettingsSaved',state.isSettingsSaved);
        },
        setSettingsMinBudget : (state,action) => {
            state.userMinimumBudget = action.payload;
            localStorage.setItem('userMinimumBudget',state.userMinimumBudget);
        },
        setSettingsMaxBudget : (state,action) => {
            state.userMaximumBudget = action.payload;
            localStorage.setItem('userMaximumBudget',state.userMaximumBudget);
        },
        setMusicalityTypes : (state,action) => {
            if(action.payload.type && action.payload.type == "add") {
                state.userMusicalityTypes = [...state.userMusicalityTypes, action.payload.data]
            } else {
                state.userMusicalityTypes = state.userMusicalityTypes.filter((item) => item !== action.payload.data)
            }
            
          localStorage.setItem('userMusicalityTypes',JSON.stringify(state.userMusicalityTypes));
        },
        setSavedUsersSetting : (state,action) => {
            if(action.payload.length > 0) {
                let allLangs = localStorage.getItem("languages") != null ? JSON.parse(localStorage.getItem("languages")) : [];
                let selLngs = [];
                for(let i in action.payload[0].LangId?.split(',')) {
                    for(let k in allLangs.filter((lng) => {return (lng.LanguageId == action.payload[0].LangId?.split(',')[i])})) {
                        selLngs.push(allLangs.filter((lng) => {return (lng.LanguageId == action.payload[0].LangId?.split(',')[i])})[k])
                    }
                }   
                state.selectedLanguages = selLngs;
                state.selectedCity = `${action.payload[0].CityId}_${action.payload[0].CityName}`;
                state.savedUsersSettings = action.payload[0];
                state.isSettingsSaved = true;

                localStorage.setItem('savedUsersSettings',JSON.stringify(state.savedUsersSettings));
                localStorage.setItem('selectedLanguages',JSON.stringify(state.selectedLanguages));
                localStorage.setItem('selectedCity',state.selectedCity);
                localStorage.setItem('isSettingsSaved',state.isSettingsSaved);
            } else {
                state.savedUsersSettings = [];
                state.isSettingsSaved = false;
                localStorage.setItem('savedUsersSettings',null);
                localStorage.setItem('isSettingsSaved',state.isSettingsSaved);
            }
        },
        setUpdateSettingsLoading : (state,action) => {
            state.updateSettingsLoading = true;
        },
        stopUpdateSettingsLoading : (state,action) => {
            state.updateSettingsLoading = false;
        },
        setUserSelectedCategories : (state,action) => {
            state.userSelectedCategories = action.payload;
            localStorage.setItem('userSelectedCategories',JSON.stringify(state.userSelectedCategories));
        },
        setUserSelectedGenres : (state,action) => {
            state.userSelectedGenres = action.payload;
            localStorage.setItem('userSelectedGenres',JSON.stringify(state.userSelectedGenres));
        },
        setUserSelectedEvents : (state,action) => {
            state.userSelectedEvents = action.payload;
            localStorage.setItem('userSelectedEvents',JSON.stringify(state.userSelectedEvents));
        }
    }
  });
  
  export default slice.reducer

 export const { setLanguages,setSelectedCity, setUserRequestedStates, setUserRequestedCities , setSettingsSaveStatus, setSettingsMinBudget, setSettingsMaxBudget, setMusicalityTypes, setSavedUsersSetting, setUpdateSettingsLoading, stopUpdateSettingsLoading, setUserSelectedCategories, setUserSelectedGenres, setUserSelectedEvents} = slice.actions;

export const setUserRequestedCitiesAPI = (param) => async dispatch => {
    try{
        await axios
            .post(API_URL+"UWishList/Insert",param,{headers:authHeader()})
            .then((response)=>{
            })
    } catch (e) {
        console.log('settings error',e);
    }
}

export const setUserSettings = (param) => async dispatch => {
    try{
      return  await axios 
            .post(API_URL + "USett/Insert",param,{headers:authHeader()})
            .then((response) => {
                if(response.IsSuccess){
                    return true;
                }
                else{
                    return false;
                }
            });
    } catch (e) {
        console.log('settings error',e);
    }
};

export const updateUserSettings = (param) => async dispatch => {
    dispatch(setUpdateSettingsLoading());
    try{
       return await axios 
            .post(API_URL + "USett/Update",param,{headers:authHeader()})
            .then((response) => {
                dispatch(stopUpdateSettingsLoading());
                return response;
            });
    } catch (e) {
        console.log('settings error',e);
        return e;
    }
};
