const Bagel = require('../src/bagel.js');
const assertEquals = require('../test-framework.js');

let input, exOutput;

//----------------------------------------

console.log('Can we create an Item?')

input = 'just a bagel';
exOutput = 'just a bagel';

let myBagel = new Bagel(input)
actOutput = myBagel.name;

console.log(assertEquals(actOutput, exOutput));