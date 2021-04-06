

// generate random pokemon

// no two pokemon in the same batch can be the same species

import { pokeData } from './data.js';
import { encounterPokemon } from './storage-utils.js';

function selectRandomPokemon() {
    return Math.floor(Math.random() * pokeData.length);
}

export function generateThreePokemon() {
    let randomNumOne = selectRandomPokemon();
    let randomNumTwo = selectRandomPokemon();
    let randomNumThree = selectRandomPokemon();

    while (
        randomNumOne === randomNumTwo || randomNumTwo === randomNumThree || randomNumOne === randomNumThree
    ) {
        randomNumOne = selectRandomPokemon();
        randomNumTwo = selectRandomPokemon();
        randomNumThree = selectRandomPokemon();
    }

    const generatedPokeOne = pokeData[randomNumOne];
    const generatedPokeTwo = pokeData[randomNumTwo];
    const generatedPokeThree = pokeData[randomNumThree];

    // now we are ready to encounter them

    encounterPokemon(generatedPokeOne);
    encounterPokemon(generatedPokeTwo);
    encounterPokemon(generatedPokeThree);

    // let's return something

    return [generatedPokeOne, generatedPokeTwo, generatedPokeThree];
}
