import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { zeroPad } from "../helperFuncs";
import Footer from "./Footer";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../css/listViewStyles.css";

function Pokedex() {
  var fetched = false;

  // need to use state here to allow search filtering to work
  // essentially, we're using state (filter) to display all of our data, not cacheData so we can re-render the component upon it changing

  // cacheData = our redux state cache
  const cacheData = useSelector((state) => state.cacheReducer);
  const [filter, setFilter] = useState(cacheData);

  // upon cacheData changing, we set filter to get the latest api fetch data held in our redux state cache
  useEffect(() => {
    setFilter(cacheData);
  }, [cacheData]);

  // simple function to check for first time load.
  const loaded = () => {
    if (Object.keys(cacheData).length >= 151) {
      fetched = !fetched;
    }
  };
  loaded();

  // function that templates each pokemon cell
  const EachPokemon = (details) => {
    details = details.details;
    return (
      <Link class="link" to={`/pokemon/${details.name}`}>
        <div class="pokemon">
          <div>
            <img alt="sprite" src={details.sprites.front_default}></img>
          </div>
          <div>{details.name}</div>
          <div>{zeroPad(details.id, 3)}</div>
        </div>
      </Link>
    );
  };

  // handle's search bar changes, and updates state accordingly
  const handleChange = (e) => {
    e = e.toLowerCase();
    if (e !== "") {
      var searchedPokemon = Object.keys(cacheData)
        .filter((key) => {
          return key.includes(e);
        })
        .reduce((object, key) => {
          object[key] = cacheData[key];
          return object;
        }, {});

      setFilter(searchedPokemon);
    } else {
      setFilter(cacheData);
    }
  };

  // function that populates our pokemon once our data is completely fetched!
  const populatePokemon = (data) => {
    if (fetched) {
      var pokemonList = Object.keys(data).map(function (key, index) {
        // console.log(key)
        return <EachPokemon details={data[key]}></EachPokemon>;
      });
      return pokemonList;
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
      );
    }
  };

  return (
    <>
      <div class="pokedexWrapper">
        <div class="searchWrapper">
          <input
            class="searchInput"
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Search..."
          ></input>
        </div>
        <div class="pokemonWrapper">{populatePokemon(filter)}</div>
      </div>
      <Footer class="footer"></Footer>
    </>
  );
}

export default Pokedex;
