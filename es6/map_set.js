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