const Basket = require('../src/basket.js');
const Bagel = require('../src/bagel.js');
const assertEquals = require('../test-framework.js');

let input, exOutput, actOutput;

//----------------------------------------

console.log('Can we add item to basket?');

input = 'just a bagel';
cap = 10;
exOutput = true;

let myBagel = new Bagel(input);

console.log(myBagel)

let myBasket = new Basket(cap);

console.log(myBasket.itemList)

myBasket.addItem(myBagel)

if (myBasket.itemList.indexOf(myBagel) === -1) {
    actOutput = false;
}
else {
    actOutput = true;
}

console.log(assertEquals(actOutput, exOutput));

//----------------------------------------

console.log('Can we remove an item?');

input = 'just a bagel';
cap = 5;
exOutput = false;

let myBagel2 = new Bagel(input)

let myBasket2 = new Basket(cap)

myBasket2.addItem(myBagel)

myBasket2.removeItem(myBagel2)

if (myBasket2.itemList.indexOf(myBagel2) === -1) {
    actOutput = false;
}
else {
    actOutput = true;
}

console.log(assertEquals(actOutput, exOutput));

//----------------------------------------