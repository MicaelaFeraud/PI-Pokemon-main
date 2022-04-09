import { SET_UP_POKEMONS, CREATE_POKEMON, SEARCH_POKEMON, 
    SELECT_POKEMON_BY_NAME, SET_UP_TYPES, SELECT_PAGE, selectPokemonsByPage, 
    FILTER_BY_TYPE, ORDER_BY, RESET_FILTERED_POKEMONS, SET_TYPE_FILTER, 
    SET_ORDER_BY, SET_POKEMON_SEARCH, SET_UP_CUSTOM_POKEMONS, RESET_FILTERED_POKEMONS_WITH_CUSTOMS, SET_SHOW_CUSTOM_POKEMONS, RESET_FILTERS } from "../Actions/Constans.js";
  import { PokemonsPerPage } from "../Components/PaginationBar/PaginationBar.jsx";
  
  const initialState = {
    types: [],
    pokemons: [],
    filteredPokemons: [],
    displayedPokemons: [], 
    customPokemons: [],
    showCustomPokemons: false,
    selectedPokemon: undefined,
    filtersForPokemons: {
      name: "",
      type: "All",
      orderBy: () => {return 0}
    }
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_UP_TYPES:
        return Object.assign({}, state, {
          types: action.payload,
        });
      case SET_UP_POKEMONS:
        return Object.assign({}, state, {
          pokemons: action.payload,
          filteredPokemons: action.payload,
          displayedPokemons: action.payload.slice(0,PokemonsPerPage),
          selectedPokemon: undefined
        });
      case SET_UP_CUSTOM_POKEMONS:
        return Object.assign({}, state, {
          customPokemons: action.payload,
        });
      
      case CREATE_POKEMON:
        return Object.assign({}, state, {
          customPokemons: [...state.customPokemons, action.payload]
        });
      case SET_SHOW_CUSTOM_POKEMONS:
        return Object.assign({}, state, {
          showCustomPokemons: action.payload
        });
      
      case SELECT_POKEMON_BY_NAME:
        return Object.assign({}, state, {
          selectedPokemon: action.payload
        });  
      case SEARCH_POKEMON:
        return Object.assign({}, state, {
          filteredPokemons: state.filteredPokemons.filter(p => p.name.includes(action.payload))
        });
      case SET_POKEMON_SEARCH:
        return Object.assign({}, state, {
          filtersForPokemons: {...state.filtersForPokemons, name: action.payload}
        });      
      
      case FILTER_BY_TYPE:
        return Object.assign({}, state, {
          filteredPokemons: state.filteredPokemons.filter(p => p.types.includes(action.payload))
        });
      case SET_TYPE_FILTER:
        return Object.assign({}, state, {
          filtersForPokemons: {...state.filtersForPokemons, type: action.payload}
        });
      
      case ORDER_BY:
        return Object.assign({}, state, {
          filteredPokemons: [...state.filteredPokemons].sort(action.payload)
        });
      case SET_ORDER_BY:
        return Object.assign({}, state, {
          filtersForPokemons: {...state.filtersForPokemons, orderBy: action.payload}
        });    
      
      case RESET_FILTERS:
        return Object.assign({}, state, {
          filtersForPokemons: {
            name: "",
            type: "All",
            orderBy: () => {return 0}
          }
        });
      case RESET_FILTERED_POKEMONS:
        return Object.assign({}, state, {
          filteredPokemons: [...state.pokemons]
        });
      case RESET_FILTERED_POKEMONS_WITH_CUSTOMS:
        return Object.assign({}, state, {
          filteredPokemons: [...state.customPokemons]
        });
      
      case SELECT_PAGE:
        return Object.assign({}, state, {
          displayedPokemons: selectPokemonsByPage(state.filteredPokemons, action.payload)
        });
      
      default:
        return state;
    }
  };