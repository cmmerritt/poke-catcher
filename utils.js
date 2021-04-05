import { pokeData } from './data.js';

// functions to let us find by ID and find by pokemon name

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function findByName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}