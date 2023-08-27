// Multiple parameter 
const different = (a, b) => a - b;
const sub = different(12, 3);
console.log(sub);


const multiply = (first, second, third) => first * second * third;
const multi = different(12, 3);
console.log(multi);


const student = { name: 'jerin', age: 45 }
const getAge = (person) => person.age;
const age = getAge(student);
console.log(age);


// single parameter
const getThird = numbers => numbers[2];
const third = getThird([9, 5, 4, 3]);
console.log(third);


// no parameter
const getPi = () => Math.PI;
console.log(getPi());


// Large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multip = x * y * z;
    const result = sum + multip;
    return result;
}
console.log(doMath(2, 3, 4));