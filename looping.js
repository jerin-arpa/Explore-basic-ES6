// for of use on array or string not in object
// for in use on object


const numbers = [1, 2, 5, 6];
// for(let i =0; i<numbers.length; i++){}

for (const num of numbers) {
    console.log(num);
}

const nobab = 'Siraj ud doullah';
for (const char of nobab) {
    console.log(char);
}



const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
}

// for (const key of glass) {
//     console.log(key);
// }

for (const key in glass) {
    const value = glass[key];
    console.log(key, value);
}

// optional
const keys = Object.keys(glass);
console.log(keys);
for (const key of keys) {
    console.log(key);
}
