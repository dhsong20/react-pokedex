import React, { useState, useEffect } from 'react';
import '../css/styles.css';

function Pokedex(props) {

  
  const [pokemonData, setPokemonData] = useState(props.data)
  const [filterData, setFilterData] = useState(props.data)
  // const [search, setSearch] = useState("")

  

  const handleChange = e => {

    //change pokemonData to lowercase just in case pokemon names are unrecognizable
    // var newPokemonData = pokemonData.map(pokemon => {
    //   return pokemon.toLowerCase()
    // })
    // setPokemonData(newPokemonData)
    // console.log("this is the change: ", e)
    if (e !== "") {
      
      var searchedPokemon = pokemonData.filter(pokemon => {
        // console.log(pokemon, e, pokemon.name.includes(e))
        return pokemon.name.includes(e)
      })
      console.log(searchedPokemon)
      setFilterData(searchedPokemon)
    } else {
      setFilterData(props.data)
    }
  }

  const populatePokemon = (data) => {
    var pokemonList = data.map((pokemon) => 
      <div class="pokemon">
        {pokemon.name}
      </div>
    )
    return pokemonList
  }

  
  return (
    
    <div class="pokedexWrapper">
      <div class="searchWrapper">
        <input class="searchInput" type="text" onChange={e => handleChange(e.target.value)}></input>
        {/* <input class="searchInputSubmit" type="submit" value="Search"></input> */}
      </div>
      <div class="pokemonWrapper">
        
        {populatePokemon(filterData)}

      </div>
    </div>
    
  );
}

export default Pokedex;
