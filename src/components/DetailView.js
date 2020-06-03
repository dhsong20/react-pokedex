import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../css/detailViewStyles.css';
import { detailsFetch } from '../redux/actions';
import { zeroPad } from "../helperFuncs";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from './Footer';



function DetailView({ match }) {

  const pokeName = match.params.pokemon
  const pokeData = useSelector(state => state.cacheReducer)[pokeName]

  

  
  console.log(pokeData)
  if (pokeData) {

    const frontSprite = pokeData.sprites.front_default
    const backSprite = pokeData.sprites.back_default
    const pokeID = zeroPad(pokeData.id, 3)

    var types = []
    pokeData.types.map(element => {

      var color 
      console.log(element.type.name)
      switch(element.type.name) {
        case "bug": 
          color = "#3B9950"
          break
        case "dark": 
          color = "#5B5B79"
          break
        case "dragon": 
          color = "#5FCDD7"
          break
        case "electric": 
          color = "#E2E629"
          break
        case "fairy": 
          color = "#ED1069"
          break
        case "fighting": 
          color = "#ED6238"
          break
        case "fire": 
          color = "#FE4C5A"
          break
        case "flying": 
          color = "#93B3C7"
          break
        case "ghost": 
          color = "#8F688E"
          break
        case "grass": 
          color = "#25CC4C"
          break
        case "ground": 
          color = "#714721"
          break
        case "ice": 
          color = "#86D3F5"
          break
        case "normal": 
          color = "#CA98A7"
          break
        case "poison": 
          color = "#9B69DA"
          break
        case "psychic": 
          color = "#F71C8F"
          break
        case "rock": 
          color = "#8B3D23"
          break
        case "steel": 
          color = "#44BB93"
          break
        case "water": 
        console.log("heee")
          color = "#85AAF9"
          break
        default:
          color = "#FFFFFF"

      }
      types.push([color, element.type.name])
    });

    const height = pokeData.height
    const weight = pokeData.weight

    var moveCounter = 1
    var moves = []
    pokeData.moves.map(element => {
      moves.push([moveCounter, element.move.name])
      moveCounter += 1
    })

    var abilityCounter = 1
    var abilities = []
    pokeData.abilities.map(element => {
      abilities.push([abilityCounter, element.ability.name])
      abilityCounter += 1
    })

    console.log(types)
    // console.log(moves)
    // console.log(abilities)

    return (
      <body>
        
        <div class="pokeWrapper">

          <div class="pokeHeader">

            <div class="pokeSprite">
              <img src={frontSprite}></img>
            </div>
            
            {/* <img class="pokeSprite" src={backSprite}></img> */}
            <div>ID: {pokeID}</div>
            <div class="pokeTypes">
              {types.map(element => {
                return (
                  <div class="type" style={{ backgroundColor: element[0] }}>
                    {element[1]}
                  </div>
                  )
              })}
            </div>
            <div class="pokeNums">
              Weight: {weight}
            </div>
            <div class="pokeNums">
              Height: {height}
            </div>
          </div>

          <div class="pokeFooter">

              <div class="pokeActions">
                <h2>Moves</h2>
                <div class="actions">
                  {moves.map(element => {
                    return (
                      <div class="actionElement">
                        {element[0]}. {element[1]}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div class="pokeActions">
                <h2>Abilities</h2>
                <div class="actions">
                  {abilities.map(element => {
                    return (
                      <div class="actionElement">
                        {element[0]}. {element[1]}
                      </div>
                    )
                  })}
                </div>
              </div>

          </div>

        </div>

        <Footer class="footer"></Footer>

      </body>
    )
  } else {
    return (
      <div class="loader">
          <Loader
          
            
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
  
          />
        </div>
    )
  }
}

export default DetailView;
