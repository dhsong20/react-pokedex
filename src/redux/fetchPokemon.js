import { startFetchPokemon, failFetchPokemon, finishFetchPokemon, cachePokemon } from "./actions"

export const fetchPokemon = (url) => async dispatch => {

  console.log("fetchPokemon")
  dispatch(startFetchPokemon())

  try { 
    const data = await fetch(url).then((response) => response.json());
    
    dispatch(finishFetchPokemon(data))

    const pokeData = data.results
    console.log(pokeData)

    dispatch(cachePokemon(pokeData))
  } catch (error) {
    dispatch(failFetchPokemon(error))
  }
}