const number = [1,2,3];
const doubled = number.map(num=>num*2);

console.log(doubled); // [2,4,6]


//filter method

const numbers = [1,2,3,4,5,6,7,8,9,10];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2,4,6,8,10]

//forEach method executes a provided function once for each array element.
const numbers1 = [1,2,3,4,5,6,7,8,9,10];
numbers1.forEach(num=>console.log(num));


// reduce function reduces the array to a single value.
const numbers2 = [1,2,3,4,5];
const sum = numbers2.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(sum); 

//find method returns the first element in the array that satisfies the provided testing function.
const numbers3 = [1,2,3,4,5];
const greaterthanthree = numbers3.find(num=>num>3);
console.log(greaterthanthree); 

//indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const numbers4 = [1,2,3,4,5];
const findfour = numbers4.indexOf(10);
console.log(findfour);