# ES6
### String Literal
```
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
```
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