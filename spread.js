const max = Math.max(6, 23, 45, 1, 89, 23);
const numbers = [3, 5, 6, 4, 7, 90, 15, 44];
const arrayMax = Math.max(...numbers);


console.log(max);
console.log(...numbers);
console.log(arrayMax);


// use spread operator to copy
const nums = [4, 5, 87, 9];
const nums2 = nums;

const nums3 = [...nums];
console.log(nums3);
nums.push(12);

console.log(nums3);
console.log(nums);



// advance
const songka = [...nums, 99]; //add extra element while Copy
console.log(songka);