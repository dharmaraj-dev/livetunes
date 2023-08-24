import {
    USER_SELECTED_LANGUAGES,
    USER_SELECTED_CITIES,
    USER_BUDGET_MIN_VALUE,
    USER_BUDGET_MAX_VALUE,
    USER_MUSICALITY_TYPES
  } from "../actions/types";
  
  const selectedLanguages = localStorage.getItem("selectedLanguages") != null ? JSON.parse(localStorage.getItem("selectedLanguages")) : [];
  const selectedCities = localStorage.getItem("selectedCities") != null ? JSON.parse(localStorage.getItem("selectedCities")) : [];
  const minimumBudget = localStorage.getItem("minimumBudget") != null ? JSON.parse(localStorage.getItem("minimumBudget")):5000;
  const maximumBudget = localStorage.getItem("maximumBudget") != null ? JSON.parse(localStorage.getItem("maximumBudget")):250000;
  const musicalityTypes = localStorage.getItem("musicalityTypes") != null ? JSON.parse(localStorage.getItem("musicalityTypes")):[];
  
  
  const initialState = { 
    userSelectedLanguages: selectedLanguages,
    userSelectedCities: selectedCities,
    userMinimumBudget: minimumBudget,
    userMaximumBudget: maximumBudget,
    userMusicalityTypes : musicalityTypes,
  };
  
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_SELECTED_LANGUAGES:
        return {
          ...state,
          userSelectedLanguages: payload
        };
      case USER_SELECTED_CITIES:
        return {
            ...state,
            userSelectedCities:payload
        };
      case USER_BUDGET_MIN_VALUE:
        return{
            ...state,
            userMinimumBudget:payload
        };
        case USER_BUDGET_MAX_VALUE:
          return{
            ...state,
            userMaximumBudget:payload
        };
        case USER_MUSICALITY_TYPES:
            return{
                ...state,
                userMusicalityTypes:payload
            }
      default:
        return state;
    }
  }
  