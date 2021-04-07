// import functions and grab DOM elements

// import { pokeData } from './data.js';

import { capturePokemon, encounterPokemon } from './storage-utils.js';
import { generateThreePokemon } from '../data-utils.js';
import { findByName } from './utils.js';

// initialize state

let roundsPlayed = 0;
// let pokedex = [];


// set event listeners to update state and DOM

// fill in the html blanks
    // select by label id
    // add image (by url)
    // 

function createPokeDOM() {

    const poke1Label = document.querySelector('#poke-1-label');
    const poke2Label = document.querySelector('#poke-2-label');
    const poke3Label = document.querySelector('#poke-3-label');

    const radioButton1 = document.querySelector('#poke-1');
    const radioButton2 = document.querySelector('#poke-2');
    const radioButton3 = document.querySelector('#poke-3');

    const poke1Image = document.querySelector('#poke-1-image');
    const poke2Image = document.querySelector('#poke-2-image');
    const poke3Image = document.querySelector('#poke-3-image');

    const pokemonOnPage = generateThreePokemon();

    poke1Image.src = pokemonOnPage[0].url_image;
    poke2Image.src = pokemonOnPage[1].url_image;
    poke3Image.src = pokemonOnPage[2].url_image;

    poke1Label.append(poke1Image);
    poke2Label.append(poke2Image);
    poke3Label.append(poke3Image);
    
    radioButton1.value = pokemonOnPage[0].pokemon;
    radioButton2.value = pokemonOnPage[1].pokemon;
    radioButton3.value = pokemonOnPage[2].pokemon;
}

//let's add our three pokemon when we load the page

createPokeDOM();

const captureButton = document.getElementById('capture-button');

captureButton.addEventListener('click', () => {
    const selectedButton = document.querySelector('input:checked');
    const selectedPokemon = findByName(selectedButton.value);
    roundsPlayed = roundsPlayed + 1;
    if (roundsPlayed <= 9) {
        capturePokemon(selectedPokemon);
        createPokeDOM();
    } else {
        capturePokemon(selectedPokemon);
        window.location = './results.html';
    }
});