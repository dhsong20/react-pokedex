import { startFetchPokemon, failFetchPokemon, finishFetchPokemon, startFetchDetails, finishFetchDetails, failFetchDetails, addToCache } from "./actions"

export const fetchPokemon = (url) => async dispatch => {

  console.log("fetchPokemon")
  dispatch(startFetchPokemon())

  try { 
    const data = await fetch(url).then((response) => response.json());
    
    dispatch(finishFetchPokemon(data))

    const pokeData = data.results
    // console.log(pokeData)

    for (const pokeKey in pokeData) {
      const pokeName = pokeData[pokeKey].name
      var pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`

      dispatch(startFetchDetails(pokeUrl))

      try { 
        const details = await fetch(pokeUrl).then((response) => response.json())
        dispatch(finishFetchDetails(details))

        // console.log(details)
        // console.log(details.name)

        // add to cache dispatch
        dispatch(addToCache(details.name, details))

      } catch (error) {
        dispatch(failFetchDetails(error))
        console.log(error)
      }
    }

  } catch (error) {
    dispatch(failFetchPokemon(error))
  }

  
}

