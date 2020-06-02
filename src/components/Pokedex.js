import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, connect } from 'react-redux';

import "../css/styles.css";

function Pokedex() {

  const fetchState = useSelector(state => state.fetchReducer)
  const pokeData = fetchState.data
  console.log(pokeData)

  // const [pokemonData, setPokemonData] = useState(props.data);
  // const [filterData, setFilterData] = useState(props.data);

  const EachPokemon = ( {data} ) => {
    return (
      <Link class="link" to={`/pokemon/${data.name}`}>
        <div class="pokemon">
          {data.name}
        </div>
      </Link>
    )
  }

  // const handleChange = (e) => {
  //   if (e !== "") {
  //     var searchedPokemon = pokemonData.filter((pokemon) => {
  //       // console.log(pokemon, e, pokemon.name.includes(e))
  //       return pokemon.name.includes(e);
  //     });
  //     console.log(searchedPokemon);
  //     setFilterData(searchedPokemon);
  //   } else {
  //     setFilterData(props.data);
  //   }
  // };

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


    return (
      <div class="pokedexWrapper">
        <div class="searchWrapper">
          <input
            class="searchInput"
            type="text"
            // onChange={(e) => handleChange(e.target.value)}
            
          ></input>
        </div>
        <div class="pokemonWrapper">{populatePokemon(pokeData)}</div>
      </div>
    );

}



export default Pokedex;
