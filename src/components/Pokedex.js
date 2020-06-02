import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, connect } from 'react-redux';

import "../css/styles.css";

function Pokedex() {

 


  const fetchState = useSelector(state => state.fetchReducer)
  const pokeData = fetchState.data

  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    setFilterData(pokeData)
  })
  



  // const [pokemonData, setPokemonData] = useState(pokeData);
  



  const EachPokemon = ( {data} ) => {
    return (
      <Link class="link" to={`/pokemon/${data.name}`}>
        <div class="pokemon">
          {data.name}
        </div>
      </Link>
    )
  }

  const handleChange = (e) => {
    if (e !== "") {
      var searchedPokemon = pokeData.results.filter((pokemon) => {
        // console.log(pokemon, e, pokemon.name.includes(e))
        return pokemon.name.includes(e);
      });
      
      // filterData = searchedPokemon
      setFilterData(searchedPokemon)
    } else {
      // filterData = pokeData
      setFilterData(pokeData)
    }
  };

  const populatePokemon = (data) => {
    if (data) {
      var pokemonList = data.results.map((pokemon) => (
        // console.log(pokemon)
        <EachPokemon data={pokemon} />
      ));
      return pokemonList;
    } else {
      return (
        <div>
          loading...
        </div>
      )
    }
  };

  if (filterData) {
    return (
      <div class="pokedexWrapper">
        <div class="searchWrapper">
          <input
            class="searchInput"
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            
          ></input>
        </div>
        <div class="pokemonWrapper">{populatePokemon(filterData)}</div>
      </div>
    );
  }
  return (<div>loading</div>)

}



export default Pokedex;
