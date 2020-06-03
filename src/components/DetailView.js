import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/styles.css';
import { detailsFetch } from '../redux/actions';

function DetailView({ match }) {

  const pokeName = match.params.pokemon
  const pokeData = useSelector(state => state.cacheReducer)[pokeName]
  
  console.log(pokeData)
  if (pokeData) {
    return (
      <div>
        {pokeData.name}
        
      </div>
    )
  } else {
    return (
      <div>
        loading...
      </div>
    )
  }
}

export default DetailView;
