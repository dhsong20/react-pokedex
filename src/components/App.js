import React, { useEffect } from "react";
import ListView from "./ListView";
import DetailView from "./DetailView";
import FourOhFour from "./FourOhFour";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPokemon } from "../redux/fetchPokemon";
import ScrollToTop from "../scrollHelper";
import "../css/listViewStyles.css";

function App(props) {
  // only fetch call in entire pokedex executed upon loading.

  useEffect(() => {
    props.fetchPokemon("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route exact path="/pokemon/:pokemon" component={DetailView} />
          <Route exact path="/404" component={FourOhFour}></Route>
          <Route component={FourOhFour}></Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

const mapActionsToProps = {
  fetchPokemon,
};

export default connect(null, mapActionsToProps)(App);
