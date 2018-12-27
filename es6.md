# ES6
### String Literal
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/string_literal.js)
```javascript
const val1 = 'my string1';
const val2 = 'my string2';

const conVal = val1 + ', ' + val2;
console.log('test1');
console.log(conVal);

// String literal
const litVal = `${val1}, ${val2}`;
console.log('test2');
console.log(litVal);
``` 

### Destructure object & array
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/destructure_object_array.js)
```javascript
const address = {
  country: 'South Korea',
  city: 'Seoul',
  street: 'Gangnam',
  str_num: 141,
  postcode: '00510',
};

// 객체 비구조화, Object Destructuring.
const country = 'Japan';
const city = 'Osaka';

const { country: nextCountry, city: nextCity } = address;
console.log(`${nextCountry}, ${nextCity}`);

// 배열 비구조화, Array Destructuring.
const [thirdCountry] = ['Japan', 'South Korea', 'America'];
console.log(thirdCountry);

// 객체 리터럴, Object Literal.
function getAddress(country, city, street) {
  const myAddress = {
    country,
    city,
    street,
    str_num: 888,
    postcode: '9999',
  };
  console.log(myAddress);
}

getAddress('Japan', 'Osaka', 'street');
```

### for..of
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/for..of.js)
```javascript
for (var i in years) {
  console.log(typeof i);
  console.log(years[i]);
}
```

### Spread Operator
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/spread_operator.js)
```javascript
// Spread Operator
// let years = [2001, 2010, 2015, 2018];
// let yearsCp = [2000, ...years, 2020];

// console.log(yearsCp);

// let koreanHistory = {
//   liberate: 1945,
//   625: 1950,
// };

// let history = {
//   worldWar1: 1914,
//   worldWar2: 1945,
//   ...koreanHistory,
// };

// console.log(history);

let address1 = {
  country: 'South Korea',
  citiy: 'Seoul',
};

let address2 = {
  ...address1,
  country: 'United State',
};
console.log(address2);
```

### Rest Operator
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/rest_operator.js)
```javascript
// Rest Operator

// past
// function printYears(years) {
//   console.log(arguments);
// }

// now
function printYears(...years) {
  console.log(years);
}

printYears(2000, 2001, 2010, 2015, 2018);
```

### Arrow Functions
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/arrow_functions.js)
```javascript
// Arrow Functions
const years = [
  {
    year: 2000,
    data: '크리스마스',
  },
  {
    year: 2001,
    data: '롤리팝',
  },
  {
    year: 2010,
    data: '안드로이드',
  },
  {
    year: 2015,
    data: '리엑트네이티브',
  },
  {
    year: 2018,
    data: '곧 2019',
  },
];

// past
// const result = years.filter(function (data) {
//   return data.year > 2000;
// });

// arrow function
const result = years.filter((data) => data.year > 2000);

console.log(result);
```

### Defalut Params
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/default_params.js)
```javascript
// Default Params
const defaultValue = [
  {
    year: 2000,
    data: '크리스마스',
  },
  {
    year: 2001,
    data: '롤리팝',
  },
  {
    year: 2010,
    data: '안드로이드',
  },
  {
    year: 2015,
    data: '리엑트네이티브',
  },
  {
    year: 2018,
    data: '곧 2019',
  },
];

function printYears(years = defaultValue) {
  console.log(years);
}

printYears();
```

### Includes
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/includes.js)
```javascript
// includes
// let years = [2001, 2010, 2015, 2018];
const fruits = ['apple', 'banana', 'potato'];

// past
// console.log(years.indexOf(2001) !== -1);
// console.log(fruits.indexOf('apple') !== -1);

console.log(fruits.includes('apple'));
```

### let & const
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/es6&const.js)
```javascript
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
```

### Import & export
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/import&export.js)
```javascript
// import & export

import root from './includes';
import { fruits } from './includes';
console.log(root);
console.log(fruits);
```

### Classes
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/classes.js)
```javascript
// Classes
// es5
// function Animal () {
//   this.type = 'chosic';
//   this.tail = false;
// }

// Animal.prototype.setType = function(type) {
//   this.type = type;
// }

// Animal.prototype.getType = function() {
//   return this.type;
// }

// es6
class Animal {
  // constructor
  constructor(type, tail) {
    this.type = type;
    this.tail = tail;
  }

  // function
  cry(value = 'Woof Woof') {
    console.log(value);
  }

  // static function
  static instance() {
    console.log('instance!!');
  }
}

let dog = new Animal('Dog', true);
dog.tail = false;
console.log(dog);

dog.cry('woof');

// inheritance
class Cat extends Animal {
  constructor(type, tail, color) {
    super(type, tail);
    this.color = color;
  }
  cry(value = 'Meow Meow') {
    console.log(value);
  }
}

let cat = new Cat('Cat', true, 'yellow');
cat.cry();
console.log(cat);
```

### Trailing Commas
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/trailing_commas.js)
```javascript
// Trailing Commas
const myObj = {
  first: 'test1',
  second: 'test2',
};

console.log(myObj);

const myArr = [
  1,
  2,
  3,
  3,
  3,
  3,
  3,
];
console.log(myArr);
```

### Map & Set
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/map_set.js)
```javascript
// Map
let map = new Map([['id', 'dooboolab']]);
map.set('testId', 'test');
map.get('testId'); // test
console.log(map);
console.log(map.size);

console.log(map.has('testId'));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.delete('testId'));
console.log(map.size);
map.clear();
console.log(map.size);

// Set
const set = new Set([1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3]);
set.add(4);
set.add(4).add(5);
console.log(set);
console.log(set.size);

set.delete(5);
console.log(set.size);
set.clear();
console.log(set.size);
```

### Async & Await
[Source](https://github.com/hyochan/react-native-training/blob/master/es6/async_await.js)
```javascript
// Map
let map = new Map([['id', 'dooboolab']]);
map.set('testId', 'test');
map.get('testId'); // test
console.log(map);
console.log(map.size);

console.log(map.has('testId'));
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.delete('testId'));
console.log(map.size);
map.clear();
console.log(map.size);

// Set
const set = new Set([1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3]);
set.add(4);
set.add(4).add(5);
console.log(set);
console.log(set.size);

set.delete(5);
console.log(set.size);
set.clear();
console.log(set.size);
```