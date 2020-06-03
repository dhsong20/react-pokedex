import { pokemonFetch, detailsFetch } from "./actions";

export const pokeInitState = {
  data: null,
  isFetching: false,
  error: null,
};

export const fetchReducer = (state = pokeInitState, action) => {
  switch (action.type) {
    case pokemonFetch.START_FETCH:
      return { ...state, isFetching: true };

    case pokemonFetch.FINISH_FETCH:
      return { isFetching: false, data: action.payload, error: null };

    case pokemonFetch.FAIL_FETCH:
      return { isFetching: false, error: action.payload };

    default:
      return state;
  }
};

export const detailsInitState = {
  data: null,
  isFetching: false,
  error: null,
};

export const detailsReducer = (state = detailsInitState, action) => {
  switch (action.type) {
    case detailsFetch.START_FETCH:
      return { ...state, isFetching: true };

    case detailsFetch.FINISH_FETCH:
      return { isFetching: false, data: action.payload, error: null };

    case detailsFetch.FAIL_FETCH:
      return { isFetching: false, error: action.payload };

    default:
      return state;
  }
};

export const cacheReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CACHE":
      const pokeName = action.name;
      if (!Object.keys(state).includes(pokeName)) {
        console.log("new entry in cache");
        state[pokeName] = action.details;
      }
      return { ...state };
    default:
      return state;
  }
};
