// Array Operations

// Create an array of numbers.
// Use map() to create a new array containing the squares of each number.
// Use filter() to create a new array containing only the even numbers.
// Use forEach() to print each number in the original array.
// Use reduce() to calculate the sum of all numbers in the array.


const numbers = [1,2,3,4,5];
const squared = numbers.map(num=>num**2);
console.log(squared);

const even = numbers.filter(num=>num%2===0);
console.log(even);

numbers.forEach(num=>console.log(num));

const sum = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(sum);

