import { getPermStorage, getPokedex } from './storage-utils.js';

const pokedex = getPokedex();
const againButton = document.querySelector('#play-again-button');
const totalButton = document.querySelector('#all-results-button');

const permStorage = getPermStorage();

const namesArray = [];
const capturedArray = [];
const encounteredArray = [];

const POKEDEX = 'POKEDEX';

for (let pokemon of pokedex) {
    namesArray.push(pokemon.id);
    capturedArray.push(pokemon.captured);
    encounteredArray.push(pokemon.encountered);
}

const permNamesArray = [];
const permCapturedArray = [];
const permEncounteredArray = [];

for (let pokemon of permStorage) {
    permNamesArray.push(pokemon.id);
    permCapturedArray.push(pokemon.captured);
    permEncounteredArray.push(pokemon.encountered);
}


/* for (let poke of pokedex) {
    const tr = document.createElement('tr');
    const pokeName = document.createElement('td');
    pokeName.textContent = poke.id;
    const pokeTimesEncountered = document.createElement('td');
    pokeTimesEncountered.textContent = poke.encountered;
    const pokeTimesCaptured = document.createElement('td');
    pokeTimesCaptured.textContent = poke.captured;

    tr.append(pokeName, pokeTimesEncountered, pokeTimesCaptured);

    tableBody.append(tr);
} */

againButton.addEventListener('click', () => {
    localStorage.removeItem(POKEDEX);
    window.location = './index.html';
});

totalButton.addEventListener('click', () => {
    localStorage.removeItem(POKEDEX);
    window.location = './all-time-results.html';
});

const ctx = document.getElementById('chart-1').getContext('2d');

const myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: namesArray,
        datasets: [
            {
                label: 'Pokemon encountered',
                data: encounteredArray,
                backgroundColor: 'pink',
                borderColor: 'red',

                borderWidth: 1
            },
            {
                label: 'Pokemon captured',
                data: capturedArray,
                backgroundColor: 'lightblue',
                borderColor: 'steelblue',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
