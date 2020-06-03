import {
  startFetchPokemon,
  failFetchPokemon,
  finishFetchPokemon,
  startFetchDetails,
  finishFetchDetails,
  failFetchDetails,
  addToCache,
} from "./actions";

export const fetchPokemon = (url) => async (dispatch) => {
  console.log("fetchPokemon");

  // dispatch start fetch to change fetching state
  dispatch(startFetchPokemon());

  try {
    // actual fetch is happening here
    const data = await fetch(url).then((response) => response.json());

    // dispatch finish fetch to end fetching state
    dispatch(finishFetchPokemon(data));

    // result of the fetch (pokemon names and urls for detailed information)
    const pokeData = data.results;

    // we have to loop through the 151 pokemon and do another fetch for each one to get detailed information
    for (const pokeKey in pokeData) {
      // we get the specific url for the current pokemon
      const pokeName = pokeData[pokeKey].name;
      var pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;

      // dispatch start fetch details to change fetching state
      dispatch(startFetchDetails(pokeUrl));

      try {
        // actual fetch of detail happens here
        const details = await fetch(pokeUrl).then((response) =>
          response.json()
        );

        // dispatch finish fetch to end fetching state of details
        dispatch(finishFetchDetails(details));

        // dispatch add to cache action which puts our newely fetched detailed information into our redux state cache!
        dispatch(addToCache(details.name, details));
      } catch (error) {
        dispatch(failFetchDetails(error));
        console.log(error);
      }
    }
  } catch (error) {
    dispatch(failFetchPokemon(error));
  }
};
