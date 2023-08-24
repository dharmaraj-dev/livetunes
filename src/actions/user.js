import {
    USER_SELECTED_LANGUAGES,
    USER_SELECTED_CITIES,
    USER_BUDGET_MIN_VALUE,
    USER_BUDGET_MAX_VALUE,
    USER_MUSICALITY_TYPES
  } from "./types";
  
  import UserService from "../services/user.service";
  
    export const setSelectedLanguages = (lang) => (dispatch) => {
        UserService.setSelectedLanguages(lang);
        dispatch({
            type: USER_SELECTED_LANGUAGES,
            payload: lang,
        });
    }

    export const setSelectedCities = (cities) => (dispatch) => {
        UserService.setSelectedCities(cities);
        dispatch({
            type: USER_SELECTED_CITIES,
            payload: cities,
        });
   }

   export const setBudgetMin = (minBudget) => (dispatch) => {
        UserService.setBudgetMin(minBudget);
        dispatch({
            type:USER_BUDGET_MIN_VALUE,
            payload: minBudget,
        });
    }
    
    export const setBudgetMax = (maxBudget) => (dispatch) => {
        UserService.setBudgetMax(maxBudget);
        dispatch({
            type:USER_BUDGET_MAX_VALUE,
            payload: maxBudget,
        });
    }

    export const setMusicalityTypes = (musicalityTypes) => (dispatch) => {
        UserService.setMusicalityTypes(musicalityTypes);
        dispatch({
            type:USER_MUSICALITY_TYPES,
            payload:musicalityTypes,
        });
    }