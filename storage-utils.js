// set and get pokedex from local storage

import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const pokedexAsString = localStorage.getItem(POKEDEX);
    if (!pokedexAsString) {
        return [];
    }
    const pokedexAsParsed = JSON.parse(pokedexAsString);
    return pokedexAsParsed;
}

export function setPokedex(pokedexAsParsed) {
    const pokedexAsString = JSON.stringify(pokedexAsParsed);
    localStorage.setItem(POKEDEX, pokedexAsString);
}


// encounter and capture pokes 

// encounter function

    // given a selected pokemon, ask if it is in the pokedex
        // if not, add it; if yes, increment

    // set in local storage & return!

export function encounterPokemon(pokemon) {
    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, pokemon.pokemon);
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const pokedexAddition = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1,
        };
        pokedex.push(pokedexAddition);
    }
    setPokedex(pokedex);
    return pokedex;
}

//capture function

export function capturePokemon(pokemon) {
    // check pokemon against pokedex
    // increment the matching pokemon's 'captured' property
    // should always be in pokedex already since we will run 'encountered' when page loads...

    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, pokemon.pokemon);
    matchingPokemon.captured = matchingPokemon.captured + 1;
    setPokedex(pokedex);
    return pokedex;
}