import { getPokedex } from './storage-utils.js';

const tableBody = document.querySelector('#results-table-body');
const pokedex = getPokedex();
const button = document.querySelector('#play-again-button');

for (let poke of pokedex) {
    const tr = document.createElement('tr');
    const pokeName = document.createElement('td');
    pokeName.textContent = poke.id;
    const pokeTimesEncountered = document.createElement('td');
    pokeTimesEncountered.textContent = poke.encountered;
    const pokeTimesCaptured = document.createElement('td');
    pokeTimesCaptured.textContent = poke.captured;

    tr.append(pokeName, pokeTimesEncountered, pokeTimesCaptured);

    tableBody.append(tr);
}


button.addEventListener('click', () => {
    localStorage.clear();
    window.location = './index.html';
});
