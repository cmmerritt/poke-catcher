// set and get pokedex from local storage

import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';
const PERMSTORAGE = 'PERMSTORAGE';

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

// and set and get data from "permanent" storage

export function getPermStorage() {
    const permAsString = localStorage.getItem(PERMSTORAGE);
    if (!permAsString) {
        return [];
    }
    const permAsParsed = JSON.parse(permAsString);
    return permAsParsed;
}

export function setPermStorage(permAsParsed) {
    const permAsString = JSON.stringify(permAsParsed);
    localStorage.setItem(PERMSTORAGE, permAsString);
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

export function updatePermStorage(pokemon) {
    const permStorage = getPermStorage();
    const matchingPokemon = findById(permStorage, pokemon.pokemon);
    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const permAddition = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1,
        };
        permStorage.push(permAddition);
    }
    setPermStorage(permStorage);
    console.log(permStorage);
    return permStorage;
}

//capture function

export function capturePokemon(pokemon) {
    // check pokemon against pokedex
    // increment the matching pokemon's 'captured' property
    // should always be in pokedex already since we will run 'encountered' when page loads...

    const pokedex = getPokedex();
    const matchingPokemon = findById(pokedex, pokemon.pokemon);
    matchingPokemon.captured++;
    setPokedex(pokedex);
    return pokedex;
}

export function captureToPermStorage(pokemon) {
    // check pokemon against pokedex
    // increment the matching pokemon's 'captured' property
    // should always be in pokedex already since we will run 'encountered' when page loads...

    const permStorage = getPermStorage();
    const matchingPokemon = findById(permStorage, pokemon.pokemon);
    matchingPokemon.captured++;
    setPermStorage(permStorage);
    return permStorage;
}
