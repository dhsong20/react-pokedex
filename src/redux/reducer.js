import { pokemonFetch, pokemonCache } from "./actions";

export const fetchInitState = {
  data: null,
  isFetching: false,
  error: null
}

export const fetchReducer = (state = fetchInitState, action) => {
  switch (action.type) {
    case pokemonFetch.START_FETCH:
      return { ...state, isFetching: true }
    
    case pokemonFetch.FINISH_FETCH:
      return { isFetching: false, data: action.payload, error: null }
    
    case pokemonFetch.FAIL_FETCH:
      return { isFetching: false, error: action.payload}

    default:
      return state
  }
}

export const cacheInitState = {
  data: []
}

export const cacheReducer = (state = cacheInitState, action) => {
  switch (action.type) {
    case pokemonCache.CACHE:
      return {data: [...state.data, action.payload]}
    default:
      return state
  }
}