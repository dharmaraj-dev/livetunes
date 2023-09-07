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
    USER_UPDATE_ARTIST_LIST,
    USER_GET_ARTIST_INFO
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

    export const setUserSelectedCategories = (selectedCategories) => (dispatch) => {
        UserService.setUserSelectedCategories(selectedCategories);
        dispatch({
            type:USER_SELECTED_CATEGORIES,
            payload:selectedCategories,
        });
    }

    export const setUserSelectedGenres = (selectedGenres) => (dispatch) => {
        UserService.setUserSelectedGenres(selectedGenres);
        dispatch({
            type:USER_SELECTED_GENRES,
            payload:selectedGenres,
        });
    }

    export const setUserSelectedEvents = (selectedEvents) => (dispatch) => {
        UserService.setUserSelectedEvents(selectedEvents);
        dispatch({
            type:USER_SELECTED_EVENTS,
            payload:selectedEvents,
        });
    }

    export const getUserFilteredArtists = (filteringCriteria) => (dispatch) => {
        UserService.getUserFilteredArtists(filteringCriteria).then(
            (response) => {
                localStorage.setItem("userFilteredArtists",JSON.stringify(response.data.output_data));
                dispatch({
                    type:USER_FILTERED_ARTISTS,
                    payload:response.data.output_data,
                });
            },
            (error) => {
                console.log(error);
            }
        )
    }

    export const getUserFavoriteArtists = (userId) => (dispatch) => {
        UserService.getUserFavoriteArtists(userId).then(
            (response) => {
                localStorage.setItem("userFavoriteArtists",JSON.stringify(response.data.output_data));
                dispatch({
                    type:USER_FAVORITE_ARTISTS,
                    payload:response.data.output_data,
                });
            },
            (error) => {
                console.log(error);
            }
        )
    }

    export const insertFavoriteArtists = (data) => (dispatch) => {
        UserService.insertFavoriteArtists(data).then(
            (response) => {
                dispatch({
                    type: USER_UPDATE_ARTIST_LIST,
                    payload:data
                })
            },
            (error) => {
                // console.log(error);
            }
        )
    }

    export const removeFavoriteArtists = (data) => (dispatch) => {
        UserService.removeFavoriteArtists(data).then(
            (response) => {
                console.log(response);
                dispatch({
                    type: USER_UPDATE_ARTIST_LIST,
                    payload:data
                })
            },
            (error) => {
                // console.log(error);
            }
        )
    }

    export const getArtistInfo = (artId) => (dispatch) => {
        return UserService.getArtistInfoById(artId).then(
            (response) => {
               if(response.data.IsSuccess) {
                    localStorage.setItem("artistInfo",JSON.stringify(response.data));
                  dispatch({
                    type: USER_GET_ARTIST_INFO,
                    payload: response.data,
                  });
                }
                else {
                  dispatch({
                    type: USER_GET_ARTIST_INFO,
                    payload: [],
                  });
                }

              return Promise.resolve(response);
            },
            (error) => {
              const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              return Promise.reject(error);
            }
          );
    }
