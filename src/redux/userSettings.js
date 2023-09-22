import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import authHeader from "../services/auth-header";
const API_URL = "https://livetunesapi.azurewebsites.net/api/";


const sLanguages = localStorage.getItem('selectedLanguages')
  ? JSON.parse(localStorage.getItem('selectedLanguages')).length > 0 ? JSON.parse(localStorage.getItem('selectedLanguages')) : [] : [];

const sCities = localStorage.getItem('selectedCities')
  ? JSON.parse(localStorage.getItem('selectedCities')).length > 0 ? JSON.parse(localStorage.getItem('selectedCities')) : [] : [];

const userRCities = localStorage.getItem('userRequestedCities')
  ? JSON.parse(localStorage.getItem('userRequestedCities')).length > 0 ? JSON.parse(localStorage.getItem('userRequestedCities')) : [] : [];


  const slice = createSlice({
    name:'userSettings',
    initialState:{
        selectedLanguages : sLanguages,
        selectedCities : sCities,
        userRequestedCities : userRCities,
        isSettingsSaved : false,
    },
    reducers: {
        setLanguages : (state,action) => {
            console.log(state,action);
            state.selectedLanguages = action.payload;
            localStorage.setItem('selectedLanguages',JSON.stringify(state.selectedLanguages));
        },
        setUserRequestedCities : (state,action) => {
            state.userRequestedCities = action.payload;
            localStorage.setItem('userRequestedCities',JSON.stringify(state.userRequestedCities));
        },
        setSelectedCities : (state,action) => {
            state.selectedCities = action.payload;
            localStorage.setItem('selectedCities',JSON.stringify(state.selectedCities));
        },
        setSettingsSaveStatus : state => {
            state.isSettingsSaved = true;
        }
    }
  });
  
  export default slice.reducer

 export const { setLanguages,setSelectedCities, setUserRequestedCities , setSettingsSaveStatus} = slice.actions;

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