import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const sLanguages = localStorage.getItem('selectedLanguages')
  ? JSON.parse(localStorage.getItem('selectedLanguages')).length > 0 ? JSON.parse(localStorage.getItem('selectedLanguages')) : [] : [];

const sStates = localStorage.getItem('selectedStates')
  ? JSON.parse(localStorage.getItem('selectedStates')).length > 0 ? JSON.parse(localStorage.getItem('selectedStates')) : [] : [];

const sCities = localStorage.getItem('selectedCities')
  ? JSON.parse(localStorage.getItem('selectedCities')).length > 0 ? JSON.parse(localStorage.getItem('selectedCities')) : [] : [];


  const slice = createSlice({
    name:'userSettings',
    initialState:{
        selectedLanguages : sLanguages,
        selectedStates : sStates,
        selectedCities : sCities,
        isSettingsSaved : false,
    },
    reducers: {
        setLanguages : (state,action) => {
            state.selectedLanguages = action.payload;
            localStorage.setItem('selectedLanguages',JSON.stringify(state.selectedLanguages));
        },
        setStates : (state,action) => {
            state.selectedStates = action.payload;
            localStorage.setItem('selectedStates',JSON.stringify(state.selectedStates));
        },
        setCities : (state,action) => {
            state.selectedCities = action.payload;
            localStorage.setItem('selectedCities',JSON.stringify(state.selectedCities));
        },
        setSettingsSaveStatus : state => {
            state.isSettingsSaved = true;
        }
    }
  });
  
  export default slice.reducer

  const { setLanguages, setStates, setCities,setSettingsSaveStatus} = slice.actions;

export const setUserSettings = () => async dispatch => {
    try{
        await axios 
            .post(API_URL + "USett/Insert",{headers:authHeader()})
            .then((response) => {
                dispatch(setSettingsSaveStatus());
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

export const getUserSettings = () => async dispatch => {
    try{
        await axios 
              .post(API_URL + "USett/ByUserId/47" ,{headers:authHeader()})
              .then((response)=>{
                dispatch(setLanguages(response.data.output_data.LangName));
                dispatch(setStates(response.data.output_data.stateName));
                dispatch(setCities(response.data.output_data.CityName));
                // if(selectedLanguages)
              })
    } catch(e){
        console.log('get setting error',e);
    }
};