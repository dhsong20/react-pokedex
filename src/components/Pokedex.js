import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, connect } from 'react-redux';
import { reduxStore } from '../index';

import "../css/styles.css";

function Pokedex() {

  const cacheData = useSelector(state => state.cacheReducer)
  const [filter, setFilter] = useState(cacheData)

  useEffect(() => {
    setFilter(cacheData)
  }, [cacheData])

  console.log(cacheData)
  



  const EachPokemon = ( pokemon ) => {
    // console.log("each", pokemon)
    return (
      <Link class="link" to={`/pokemon/${pokemon.data}`}>
        <div class="pokemon">
          { pokemon.data }
        </div>
      </Link>
    )
  }

  const handleChange = (e) => {
    if (e !== "") {
      var searchedPokemon = Object.keys(cacheData)
        .filter((key) => {
          // console.log(pokemon, e, pokemon.name.includes(e))
        
          return (key.includes(e)) 
        })
        .reduce((object, key) => {
          object[key] = cacheData[key]
          return object
        }, {})
      
      // filterData = searchedPokemon
      console.log(searchedPokemon)
      setFilter(searchedPokemon)
    } else {
      // filterData = pokeData
      setFilter(cacheData)
    }
  };

  const populatePokemon = (data) => {
    console.log(data)
    // console.log(Object.keys(data).length)
    if (Object.keys(data).length >= 151 || filter) {
      var pokemonList = Object.keys(data).map(function(key, index) {
        // console.log(key)
        return <EachPokemon data={key}></EachPokemon>
      })
      return pokemonList;
    } else {
      return (
        <div>
          loading...
        </div>
      )
    }
  }

return (
  <div class="pokedexWrapper">
    <div class="searchWrapper">
      <input
        class="searchInput"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        
      ></input>
    </div>
    <div class="pokemonWrapper">{populatePokemon(filter)}</div>
  </div>
);


}

export default Pokedex
