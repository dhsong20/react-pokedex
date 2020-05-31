import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';
import '../css/styles.css'

function ListView() {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    async function fetchPokemon() {
      var data = await fetch("https://pokeapi.co/api/v2/pokemon").then(response => response.json())
      
      setPokemon({data})
    }

    fetchPokemon()
  }, [])


  if (pokemon) {
    return (
      <body>
        <Pokedex data={["pikachu", "charmander", "bulbasaur", "squirtle"]}></Pokedex>
      </body>
    )   
  } else {
    return (
      <div> Loading... </div>
    )
  }
}

export default ListView;
