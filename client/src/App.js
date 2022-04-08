import './App.css';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import { connect } from "react-redux";
import { filterPokemonsByType, orderPokemons, resetFilteredPokemons, resetFilteredPokemonsWithCustoms, searchPokemon, setUpCustomPokemons, setUpPokemons, setUpTypes } from "./Actions/mainAction.js";
import React, { useEffect } from "react";
import UrlError from "./Pages/UrlError/UrlError";

function App(props) {
  useEffect(() =>{
    props.setUpPokemons();
    props.setUpTypes();
    props.setUpCustomPokemons();
  },[]);

  useEffect(() =>{
    if(props.showCustomPokemons){
      props.resetFilteredPokemonsWithCustoms();
    }
    else{
      props.resetFilteredPokemons();
    }
    const selectedType = props.filtersForPokemons.type;
    if(selectedType !== "All"){
      props.filterPokemonsByType(selectedType)
    }
    const pokemonName = props.filtersForPokemons.name;
    props.searchPokemon(pokemonName);
  }, [props.filtersForPokemons, props.showCustomPokemons])
  
  return (
    <>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/pokemons" component={Home}/>
      <Route path="/*" component={UrlError}/>
    </Switch>
    </>
  );
}

function mapStateToProps(state) {
  return {
    filtersForPokemons: state.filtersForPokemons, 
    showCustomPokemons: state.showCustomPokemons
  };
}

const mapDispatchToProps = {
  setUpPokemons,
  setUpTypes,
  setUpCustomPokemons,
  resetFilteredPokemons,
  resetFilteredPokemonsWithCustoms,
  filterPokemonsByType,
  orderPokemons,
  searchPokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
