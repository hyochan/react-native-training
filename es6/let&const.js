// let & const

// var is hoisting
// ECMA Script 2015 = es6
console.log(myId);
if (true) {
  let myId = 'dooboolab';
}

// const
// object
const fruit = {};
fruit.first = 'apple';
console.log(fruit);
// array
const apples = [0, 1, 2];
apples[0] = 5;
console.log(apples);
