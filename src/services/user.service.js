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

export default{
    setSelectedLanguages,
    setSelectedCities,
    setBudgetMin,
    setBudgetMax,
    setMusicalityTypes,
};