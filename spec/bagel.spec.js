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

//-----------------------------------------

console.log('Can we output the price of a bagel?')

input2 = 'just a bagel';
exOutput2 = 1;

let myBagel2 = new Bagel(input2);
actOutput2 = myBagel2.price;

console.log(assertEquals(actOutput2, exOutput2));
