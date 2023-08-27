const first = 'Ismat';
const middle = 'Jerin';
const last = 'Arpa';

const name = first + ' ' + middle + ' ' + last;
console.log(name);


const a = 10;
const b = 20;
const result = 'The sum of' + ' ' + a + ' ' + 'and' + ' ' + b + ' ' + 'is' + ' ' + (a + b);
console.log(result);


// USe of backtick
const numbers = [2, 3, 4, 5];
const student = { name: 'jerin', age: 23 };


// const math = `The sum of ${a} and ${b} is ${a + b}`;
const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`;
console.log(math);


const email = 'hello \n' + ' ' + 'Ismat Jerin \n' + ' ' + 'Arpa';
console.log(email);


// USe of backtick
const challenge = ` Hello
Ismat Jerin
Arpa`;
console.log(challenge);