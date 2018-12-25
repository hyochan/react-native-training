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
