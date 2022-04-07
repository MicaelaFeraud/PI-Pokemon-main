import {SET_UP_POKEMONS, CREATE_POKEMON, 
    SEARCH_POKEMON, SELECT_POKEMON_BY_NAME, SET_UP_TYPES, 
    SELECT_PAGE, FILTER_BY_TYPE, ORDER_BY, 
    RESET_FILTERED_POKEMONS, 
    SET_TYPE_FILTER,
    SET_ORDER_BY,
    SET_POKEMON_SEARCH,
    SET_UP_CUSTOM_POKEMONS,
    RESET_FILTERED_POKEMONS_WITH_CUSTOMS,
    SET_SHOW_CUSTOM_POKEMONS,
    RESET_FILTERS} from "./Constans.js";
import axios from "axios";

export function setUpTypes(){
    return function(dispatch){
        return fetch("http://localhost:3001/types")
        .then(res => res.json())
        .then(json => {
            dispatch({type: SET_UP_TYPES, payload: json});
        });
    };
}

export function setUpPokemon(){
    return function (dispatch){
        return axios.get("/pokemons")
        .then(res => res.data)
        .then(json => {
            dispatch({type: SET_UP_POKEMONS, payload: json});
        });
    };
};

export function setUpCustomPokemons(){
    return function (dispatch){
        return axios.get("/customPokemons")
        .then(res => res.data)
        .then(json => {
            dispatch({type: SET_UP_CUSTOM_POKEMONS, payload: json});
        });
    };
};

export function searchPokemon(pokemonName){
    return {type: SEARCH_POKEMON, payload: pokemonName};
};

export function setPokemonSearch(type){
    return {type: SET_POKEMON_SEARCH, payload: type};
};

export function createPokemon(input){
    return function(dispatch){
        try {
            return(
                axios.post("/pokemons", {...input})
                .then(newPokemon => {
                    alert("Tu pokemon ha sido creado");
                    let payload = {
                        id: newPokemon.data.id,
                        name: newPokemon.data.name,
                        img: "https://bitsofco.de/content/images/2018/12/broken-1.png",
                        type: newPokemon.data.types.map(t => t.name)
                    }
                    dispatch({type: CREATE_POKEMON, payload});
                })
            )
        }catch(err){
            console.log(err.message);
        }
    };
}

export function setShowCustomPokemons(value){
    return{type: SET_SHOW_CUSTOM_POKEMONS, payload: value};
};

export function selectPokemonsByName(pokemonName){
    return function (dispatch){
        return axios.get(`/pokemons/?name=${pokemonName}`)
        .then(res => {
            if(res.status === 400){
                return undefined;
            }
            return res.data;
        })
        .then(json => {
            let hasCharacter = /.* [a-zA-Z].*/;
            if(json){
                if(hasCharacter.test(json.id)){
                    json = {...json, types: json.types.map(t => t.type.name)};
                };
            };
        });
    };
};

export function selectPage(pageNumber){
    return{type: SELECT_PAGE, payload: pageNumber};
};

export function filteredPokemonsByType(type){
    return{type: FILTER_BY_TYPE, payload: type};
};

export function setTypeFilter(type){
    return{type: SET_TYPE_FILTER, payload: type};
};

export function orderPokemons(compareFunction){
    return{type: ORDER_BY, payload: compareFunction};
};

export function setOrderPokemonsBy(compareFunction){
    return{type: SET_ORDER_BY, payload: compareFunction};
};

export function resetFilters(){
    return{type: RESET_FILTERS, payload: {}};
};

export function resetFilteredPokemons(){
    return{type: RESET_FILTERED_POKEMONS, payload: {}};
};

export function resetFilteredPokemonsWithCustoms(){
    return{type: RESET_FILTERED_POKEMONS_WITH_CUSTOMS, payload: {}};
};