import { getPokedex } from './storage-utils.js';

const tableBody = document.querySelector('#results-table-body');
const pokedex = getPokedex();
const button = document.querySelector('#play-again-button');

const namesArray = [];
const capturedArray = [];
const encounteredArray = [];

for (let pokemon of pokedex) {
    namesArray.push(pokemon.id);
    capturedArray.push(pokemon.captured);
    encounteredArray.push(pokemon.encountered);
}

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

const ctx = document.getElementById('chart').getContext('2d');

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