import React, { useEffect } from 'react';
import ListView from './ListView';
import DetailView from './DetailView';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, connect } from 'react-redux';
import { fetchPokemon } from "../redux/fetchPokemon";
import '../css/styles.css';



function App(props) {

  useEffect(() => {
    props.fetchPokemon("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0")
  }, []);

  
  

  // const cacheState = useSelector(state => state.cacheReducer)
  // console.log(cacheState)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListView} />
        <Route exact path="/pokemon/:pokemon" component={DetailView} />
        <Route> <div>Not Found </div> </Route>
      </Switch>
    </Router>
  );
}

const mapActionsToProps = {
  fetchPokemon
};

export default connect(null, mapActionsToProps)(App);

