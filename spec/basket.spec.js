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

//----------------------------------------


console.log('If basket full can we create newCap');

input5 = 'just a bagel';
cap5 = 0;
exOutput5 = false;
newCap = 1
exOutput5_2= true


let myBagel5 = new Bagel(input5)
let myBasket5 = new Basket(cap5)
myBasket5.addItem(myBagel5)



if (myBasket5.itemList.indexOf(myBagel5) === -1) {
    actOutput5 = false;
}
else {
    actOutput5 = true;
}

console.log(assertEquals(actOutput5, exOutput5));

myBasket5.increaseCap(newCap)
if (myBasket5.maxCapacity >= myBasket5._itemList.length) {
    actOutput5_2 = true
}else{
    actOutput5_2 = false 
}
console.log (assertEquals(actOutput5_2,exOutput5_2));

//-----------------------------------------------

console.log('Can we have a max Cap bigger then the basket?');

input6 = 'just a bagel';
cap6 = 1;
exOutput6 = true;
newCap = 0;


let myBagel6 = new Bagel(input6)
let myBasket6 = new Basket(cap6)
myBasket6.addItem(myBagel6)


myBasket5.increaseCap(newCap)
if (myBasket6.maxCapacity >= myBasket6._itemList.length) {
    actOutput6 = true
}else{
    actOutput6 = false 
}

console.log(myBasket6.maxCapacity)
console.log(myBasket6.isFull)
console.log (assertEquals(actOutput6,exOutput6));

//-------------------------------------------------


console.log('Can we remove item that doesnt exist?');

input7 = 'just a bagel';
cap = 3;
exOutput = 'Sorry, you haven\'t added this item yet' ;

let myBagel7 = new Bagel(input7)
let myBasket7 = new Basket(cap)

actOutput7 = myBasket7.removeItem(myBagel7)

//console showing that the item does exist

console.log(assertEquals(actOutput7, exOutput));


console.log('Can we add an item that already exists?');

input8 = 'Bagel';
cap8 = 3;
exOutput8 = 'A bagel already in basket';


let myBagel8 = new Bagel(input8)
let myBasket8 = new Basket(cap8)

actOutput8 = myBasket8.addItem(myBagel8)
actOutput8 = myBasket8.addItem(myBagel8)
console.log(actOutput8)
console.log ( assertEquals(actOutput8,exOutput8));


console.log('Can we add an item that already exists?');
input9 = 'omellete';
input9_2 = 'Bagel';
cap9 = 3;
exOutput9_2 = 'A bagel already in basket';

let myBagel9 = new Bagel(input9)
let myBagel9_2 = new Bagel(input9_2)
let myBasket9 = new Basket(cap9)

actOutput9_2 = myBasket9.addItem(myBagel9_2)
actOutput9 = myBasket9.addItem(myBagel9)
console.log(actOutput9_2)
console.log ( assertEquals(actOutput9_2,exOutput9_2));
//--------------------------------------------------------------------------------------
console.log("testing to see if bagel money sum works");

inputA = "Bagel";
inputA_2 = "Bagel";
capA = 10;
exOutputA = 6;

let myBagelA = new Bagel(inputA)
let myBagelA_2 = new Bagel(inputA_2)
let myBasketA = new Basket ( capA)


myBasketA.addItem(myBagelA_2)
myBasketA.addItem(myBagelA)
actOutputA = myBasketA.sum()
console.log(assertEquals(actOutputA,exOutputA));







