export const pokemonFetch = {
  START_FETCH: "POKEMON_START_FETCH",
  FAIL_FETCH: "POKEMON_FAIL_FETCH",
  FINISH_FETCH: "POKEMON_FINISH_FETCH"
}

export const detailsFetch = {
  START_FETCH: "DETAILS_START_FETCH",
  FAIL_FETCH: "DETAILS_FAIL_FETCH",
  FINISH_FETCH: "DETAILS_FINISH_FETCH"
}


export const startFetchPokemon = () => ({
  type: pokemonFetch.START_FETCH
})

export const failFetchPokemon = (error) => ({
  type: pokemonFetch.FAIL_FETCH,
  payload: error
})

export const finishFetchPokemon = (data) => ({
  type: pokemonFetch.FINISH_FETCH,
  payload: data
})

export const startFetchDetails = () => ({
  type: detailsFetch.START_FETCH,
})

export const failFetchDetails = (error) => ({
  type: detailsFetch.FAIL_FETCH,
  payload: error
})

export const finishFetchDetails = (data) => ({
  type: detailsFetch.FINISH_FETCH,
  payload: data
})

export const addToCache = (pokeName, pokeDetails) => ({
  type: "ADD_TO_CACHE",
  name: pokeName,
  details: pokeDetails
})