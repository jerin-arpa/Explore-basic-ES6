const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
}
console.log(glass);


// All property name
const keys = Object.keys(glass);
console.log(keys);


// All property values
const value = Object.values(glass);
console.log(value);


const entries = Object.entries(glass);
console.log(entries);
/* 
Two dimensional array
output:
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
]
*/

// Delete a object property
/* delete glass.isCleaned;
console.log(glass); */

const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);


//freeze
Object.freeze(glass);
glass.source = 'Bangladesh';
console.log(glass);

// seal
Object.seal(glass);
glass.price = 5000;
console.log(glass);