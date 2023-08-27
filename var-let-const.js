// let: allow to reassign
// const: do not allow it to reassign
let moneys = 200;
moneys = moneys + 200;
console.log(moneys);


const money = 25;
const rich = money + 25;
console.log(rich);

const numbers = [23, 4, 23, 12, 56];
numbers[1] = 44;
numbers.push(8, 9, 62);
console.log(numbers);


// object
const student = {
    name: 'jerin',
    class: 12,
}
student.name = 'arpa';
console.log(student);

// loop
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + 1;
}
console.log(sum);