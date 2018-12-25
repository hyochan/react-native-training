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
