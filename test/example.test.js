// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { generateThreePokemon } from '../data-utils.js';


const test = QUnit.test;

test('generateThreePokemon should return three unique species', (expect) => {
   // we expect that Pokemon 1 != Pokemon 2, 2 != 3, 1 != 3
   // how to test? randomly generated index so can't predict three expected pokemon specifically
   // reach into data for a unique identifier and make sure no two are equal


    const expected = true;

    const dataForActual = generateThreePokemon();

    const pokeId1 = dataForActual[0]['id'];
    const pokeId2 = dataForActual[1]['id'];
    const pokeId3 = dataForActual[2]['id'];
    
    const actual = ((pokeId1 !== pokeId2) && (pokeId2 !== pokeId3) && (pokeId1 !== pokeId3));


    expect.equal(actual, expected);
});
