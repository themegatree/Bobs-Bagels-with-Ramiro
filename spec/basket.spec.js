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

myBasket2.addItem(myBagel2)

myBasket2.removeItem(myBagel2)

if (myBasket2.itemList.indexOf(myBagel2) === -1) {
    actOutput = false;
}
else {
    actOutput = true;
}

console.log(assertEquals(actOutput, exOutput));

//----------------------------------------

console.log('Can we add to a null basket?');

input = 'just a bagel';
cap = 0;
exOutput = false;

let myBagel3 = new Bagel(input)

let myBasket3 = new Basket(cap)

myBasket2.addItem(myBagel3)

if (myBasket3.itemList.indexOf(myBagel3) === -1) {
    actOutput = false;
}
else {
    actOutput = true;
}

console.log(assertEquals(actOutput, exOutput));

//------------------------------------------

console.log('Can we add to a capacity 1 basket?');

input = 'just a bagel';
input_2 = 'jurk bagel';
input_3 = 'the Ramiro Special';
cap = 1;
exOutput = true;
exOutput_2 = false;
exOutput_3 = false;

let myBagel4 = new Bagel(input)
let myBagel4_2 = new Bagel(input_2)
let myBagel4_3 = new Bagel(input_3)

let myBasket4 = new Basket(cap)

myBasket4.addItem(myBagel4)
myBasket4.addItem(myBagel4_2)
myBasket4.addItem(myBagel4_3)

if (myBasket4.itemList.indexOf(myBagel4) === -1) {
    actOutput = false;
}
else {
    actOutput = true;
}

console.log(assertEquals(actOutput, exOutput));

if (myBasket4.itemList.indexOf(myBagel4_2) === -1) {
    actOutput_2 = false;
}
else {
    actOutput_2 = true;
}

console.log(myBasket4.itemList.indexOf(myBagel4_2))
console.log(assertEquals(actOutput_2, exOutput_2));

if (myBasket4.itemList.indexOf(myBagel4_3) === -1) {
    actOutput_3 = false;
}
else {
    actOutput_3 = true;
}
console.log(assertEquals(actOutput_3, exOutput_3));
console.log(myBasket4.maxCapacity)
console.log(myBasket4.itemList.length)

