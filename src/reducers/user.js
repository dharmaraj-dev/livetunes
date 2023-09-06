import {
    USER_SELECTED_LANGUAGES,
    USER_SELECTED_CITIES,
    USER_BUDGET_MIN_VALUE,
    USER_BUDGET_MAX_VALUE,
    USER_MUSICALITY_TYPES,
    USER_SELECTED_CATEGORIES,
    USER_SELECTED_GENRES,
    USER_SELECTED_EVENTS,
    USER_FILTERED_ARTISTS,
    USER_FAVORITE_ARTISTS,
    USER_UPDATE_ARTIST_LIST
  } from "../actions/types";
  
  const selectedLanguages = localStorage.getItem("selectedLanguages") != null ? JSON.parse(localStorage.getItem("selectedLanguages")) : [];
  const selectedCities = localStorage.getItem("selectedCities") != null ? JSON.parse(localStorage.getItem("selectedCities")) : [];
  const minimumBudget = localStorage.getItem("minimumBudget") != null ? JSON.parse(localStorage.getItem("minimumBudget")):5000;
  const maximumBudget = localStorage.getItem("maximumBudget") != null ? JSON.parse(localStorage.getItem("maximumBudget")):250000;
  const musicalityTypes = localStorage.getItem("musicalityTypes") != null ? JSON.parse(localStorage.getItem("musicalityTypes")):[];
  const userSelectedCategories = localStorage.getItem("userSelectedCategories") != null ? JSON.parse(localStorage.getItem("userSelectedCategories")) : [];
  const userSelectedGenres = localStorage.getItem("userSelectedGenres") != null ? JSON.parse(localStorage.getItem("userSelectedGenres")) : [];
  const userSelectedEvents = localStorage.getItem("userSelectedEvents") != null ? JSON.parse(localStorage.getItem("userSelectedEvents")) : [];
  const userFilteredArtists = localStorage.getItem("userFilteredArtists") != null ? JSON.parse(localStorage.getItem("userFilteredArtists")) : [];
  const userFavoriteArtists = localStorage.getItem("userFavoriteArtists") != null ? JSON.parse(localStorage.getItem("userFavoriteArtists")) : [];
  
  
  const initialState = { 
    userSelectedLanguages: selectedLanguages,
    userSelectedCities: selectedCities,
    userMinimumBudget: minimumBudget,
    userMaximumBudget: maximumBudget,
    userMusicalityTypes : musicalityTypes,
    userSelectedCategories,
    userSelectedGenres,
    userSelectedEvents,
    userFilteredArtists,
    userFavoriteArtists
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
        };
        case USER_SELECTED_CATEGORIES:
            return{
                ...state,
                userSelectedCategories:payload
        };
        case USER_SELECTED_GENRES:
            return{
                ...state,
                userSelectedGenres:payload
        };
        case USER_SELECTED_EVENTS:
            return{
                ...state,
                userSelectedEvents:payload
        };
        case USER_FILTERED_ARTISTS:
            return{
                ...state,
                userFilteredArtists:payload
        };
        case USER_FAVORITE_ARTISTS:
            return{
                ...state,
                userFavoriteArtists:payload
        };
        case USER_UPDATE_ARTIST_LIST:
          let tmp = userFilteredArtists;
          tmp.map((art) => {
            if(art.ArtId == payload.ArtId) {
              return art.IsFavArtist = payload.IsFavArtist
            }
            return art;
          })
            return{
                ...state,
                userFilteredArtists:tmp
        };
      default:
        return state;
    }
  }
  