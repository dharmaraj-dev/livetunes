import {
  GET_CITIES,
  GET_STATES,
  GET_CATEGORIES,
  GET_GERNES,
  GET_LANGUAGES,
  GET_EVENTS,
  GET_EVENT_MODES
} from "../actions/types";

const cities = JSON.parse(localStorage.getItem("cities"));

const initialState = cities
  ? { cities }
  : { cities: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload
      };
    default:
      return state;
  }
}
