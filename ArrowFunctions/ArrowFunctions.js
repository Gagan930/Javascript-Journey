
// Arrow functions provide a more concise syntax for writing functions, especially for shorter functions.

const add = (a,b) => a+b;
console.log(add(2,3));

// Greet function
const greet = (name)=>{
    const message = `Hello I am ${name}`;
    return message;
}

console.log(greet("Gagan"));
