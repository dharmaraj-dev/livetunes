import {
  GET_CITIES,
  GET_STATES,
  GET_CITIES_OF_STATES,
  GET_CATEGORIES,
  GET_GERNES,
  GET_LANGUAGES,
  GET_EVENTS,
  GET_EVENT_MODES,
  GET_BANKS,
  GET_BRANCHES,
  GET_ID_PROOFS,
  GET_ADDRESS_PROOFS
} from "../actions/types";

const cities = localStorage.getItem("cities") != null ? JSON.parse(localStorage.getItem("cities")) : [];
const states = localStorage.getItem("states") != null ? JSON.parse(localStorage.getItem("states")) : [];
const categories = localStorage.getItem("categories") != null ? JSON.parse(localStorage.getItem("categories")) : [];
const gernes = localStorage.getItem("gernes") != null ? JSON.parse(localStorage.getItem("gernes")) : [];
const languages = localStorage.getItem("languages") != null ? JSON.parse(localStorage.getItem("languages")) : [];
const events = localStorage.getItem("events") != null ? JSON.parse(localStorage.getItem("events")) : [];
const eventModes = localStorage.getItem("cities") != null ? JSON.parse(localStorage.getItem("eventModes")) : [];
const banks = localStorage.getItem("banks") != null ? JSON.parse(localStorage.getItem("banks")) : [];
const branches = localStorage.getItem("branches") != null ? JSON.parse(localStorage.getItem("branches")) : [];
const idProofs = localStorage.getItem("idProofs") != null ? JSON.parse(localStorage.getItem("idProofs")) : [];
const addressProofs = localStorage.getItem("addressProofs") != null ? JSON.parse(localStorage.getItem("addressProofs")) : [];


const initialState = { cities, states, categories, gernes, languages, events, eventModes, banks, branches, idProofs, addressProofs, citiesOfState: []};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload
      };
    case GET_STATES:
      return {
        ...state,
        states: payload
      };
    case GET_CITIES_OF_STATES:
      return {
        ...state,
        citiesOfState: payload
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload
      };
    case GET_GERNES:
      return {
        ...state,
        gernes: payload
      };
    case GET_LANGUAGES:
      return {
        ...state,
        languages: payload
      };
    case GET_EVENTS:
      return {
        ...state,
        events: payload
      };
    case GET_EVENT_MODES:
      return {
        ...state,
        eventModes: payload
      };
    case GET_BANKS:
      return {
        ...state,
        banks: payload
      };
    case GET_BRANCHES:
      return {
        ...state,
        branches: payload
      };
    case GET_ID_PROOFS:
      return {
        ...state,
        idProofs: payload
      };
    case GET_ADDRESS_PROOFS:
      return {
        ...state,
        addressProofs: payload
      };
    default:
      return state;
  }
}
