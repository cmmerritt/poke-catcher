import { getPermStorage } from './storage-utils.js';

const button = document.querySelector('#play-again-button');

const POKEDEX = 'POKEDEX';

const permStorage = getPermStorage();

const permNamesArray = [];
const permCapturedArray = [];
const permEncounteredArray = [];

for (let pokemon of permStorage) {
    permNamesArray.push(pokemon.id);
    permCapturedArray.push(pokemon.captured);
    permEncounteredArray.push(pokemon.encountered);
}


button.addEventListener('click', () => {
    localStorage.removeItem(POKEDEX);
    window.location = './index.html';
});

const cty = document.getElementById('chart-1').getContext('2d');

const myChart2 = new Chart(cty, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: permNamesArray,
        datasets: [
            {
                label: 'Pokemon encountered all time',
                data: permEncounteredArray,
                backgroundColor: 'pink',
                borderColor: 'red',

                borderWidth: 1
            },
            {
                label: 'Pokemon captured all time',
                data: permCapturedArray,
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