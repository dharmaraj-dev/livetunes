import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const selectedLanguages = localStorage.getItem('selectedLanguages')
  ? JSON.parse(localStorage.getItem('selectedLanguages')).length > 0 ? JSON.parse(localStorage.getItem('selectedLanguages')) : [] : [];

const selectedCities = localStorage.getItem('selectedCities')
  ? JSON.parse(localStorage.getItem('selectedCities')).length > 0 ? JSON.parse(localStorage.getItem('selectedCities')) : [] : [];

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


  const slice = createSlice({
    name:'userSettings',
    initialState:{
        selectedLanguages,
        selectedCities,
        selectedCity,
        userRequestedStates,
        userRequestedCities,
        userMinimumBudget,
        userMaximumBudget,
        userMusicalityTypes,
        isSettingsSaved,
        savedUsersSettings,
        updateSettingsLoading: false
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
        setSelectedCities : (state,action) => {
            state.selectedCities = action.payload;
            localStorage.setItem('selectedCities',JSON.stringify(state.selectedCities));
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
            if(action.payload.type == "add") {
                state.userMusicalityTypes = [...state.userMusicalityTypes, action.payload.data]
            } else {
                state.userMusicalityTypes = state.userMusicalityTypes.filter((item) => item !== action.payload.data)
            }
            
          localStorage.setItem('userMusicalityTypes',JSON.stringify(state.userMusicalityTypes));
        },
        setSavedUsersSetting : (state,action) => {
            if(action.payload.length > 0) {
                let allLangs = localStorage.getItem("languages") != null ? JSON.parse(localStorage.getItem("languages")) : [];
                console.log(allLangs);

                let selLngs = [];
                for(let i in action.payload[0].LangId?.split(',')) {
                    for(let k in allLangs.filter((lng) => {return (lng.LanguageId == action.payload[0].LangId?.split(',')[i])})) {
                        selLngs.push(allLangs.filter((lng) => {return (lng.LanguageId == action.payload[0].LangId?.split(',')[i])})[k])
                    }
                    console.log(selLngs);
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
                state.isSettingsSaved = null;
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
    }
  });
  
  export default slice.reducer

 export const { setLanguages,setSelectedCities,setSelectedCity, setUserRequestedStates, setUserRequestedCities , setSettingsSaveStatus, setSettingsMinBudget, setSettingsMaxBudget, setMusicalityTypes, setSavedUsersSetting, setUpdateSettingsLoading, stopUpdateSettingsLoading} = slice.actions;

export const setUserRequestedCitiesAPI = (param) => async dispatch => {
    try{
        await axios
            .post(API_URL+"UWishList/Insert",param,{headers:authHeader()})
            .then((response)=>{
                console.log(response);
            })
    } catch (e) {
        console.log('settings error',e);
    }
}

export const setUserSettings = (param) => async dispatch => {
    try{
        await axios 
            .post(API_URL + "USett/Insert",param,{headers:authHeader()})
            .then((response) => {
                console.log(response);
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
                console.log(response);
                dispatch(stopUpdateSettingsLoading());
                return response;
            });
    } catch (e) {
        console.log('settings error',e);
        return e;
    }
};

// export const getUserSettings = () => async dispatch => {
//     try{
//         await axios 
//               .post(API_URL + "USett/ByUserId/47" ,{headers:authHeader()})
//               .then((response)=>{
//                 dispatch(setLanguages(response.data.output_data.LangName));
//                 dispatch(setUserRequestedCities(response.data.output_data.CityName));
//                 // if(selectedLanguages)
//               })
//     } catch(e){
//         console.log('get setting error',e);
//     }
// };