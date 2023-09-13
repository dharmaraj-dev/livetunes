import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://livetunesapi.azurewebsites.net/api/";

const setSelectedLanguages = (lang) => {
  localStorage.setItem("selectedLanguages",JSON.stringify(lang));
};

const setSelectedCities = (cities) => {
    localStorage.setItem("selectedCities",JSON.stringify(cities));
};

const setBudgetMin = (minBudget) => {
    localStorage.setItem("minimumBudget",JSON.stringify(minBudget));
};

const setBudgetMax = (maxBudget) => {
    localStorage.setItem("maximumBudget",JSON.stringify(maxBudget));
};

const setMusicalityTypes = (musicalityTypes) => {
    localStorage.setItem("musicalityTypes",JSON.stringify(musicalityTypes));
}

const setUserSelectedCategories = (selectedCategories) => {
    localStorage.setItem("userSelectedCategories",JSON.stringify(selectedCategories));
}

const setUserSelectedGenres = (selectedGenres) => {
    localStorage.setItem("userSelectedGenres",JSON.stringify(selectedGenres));
}

const setUserSelectedEvents = (selectedEvents) => {
    localStorage.setItem("userSelectedEvents",JSON.stringify(selectedEvents));
}

const getUserFilteredArtists = (filteringCriteria) => {
    return axios.post(API_URL + "UserProfile/GetAllArtist", filteringCriteria, { headers: authHeader() });
}

const getUserFavoriteArtists = (userId) => {
    return axios.get(API_URL + "AFav/ByUserId/"+userId , {headers:authHeader()});
}

const insertFavoriteArtists = (artist) => {
    return axios.post(API_URL + "AFav/Insert",artist,{headers:authHeader()});
}

const removeFavoriteArtists = (data) => {
    return axios.post(API_URL + "AFav/Delete",data,{headers:authHeader()});
}

const getArtistInfoById = (id) => {
    console.log(id);
    return axios.get(API_URL + `ArtistProfile/GetArtistProfileNew/${id.artistId}/${id.ArtistId}`,{headers:authHeader()});
}

const getAllSpecialEvents = () => {
    return axios.get(API_URL + "SpecialEvents/GetAll",{headers:authHeader()});
}

export default{
    setSelectedLanguages,
    setSelectedCities,
    setBudgetMin,
    setBudgetMax,
    setMusicalityTypes,
    setUserSelectedCategories,
    setUserSelectedGenres,
    setUserSelectedEvents,
    getUserFilteredArtists,
    getUserFavoriteArtists,
    insertFavoriteArtists,
    removeFavoriteArtists,
    getArtistInfoById,
    getAllSpecialEvents
};